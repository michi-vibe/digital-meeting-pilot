import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText,
  Trash2,
  Eye
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Meeting {
  id: string;
  title: string;
  purpose: string;
  meeting_date: string | null;
  meeting_time: string | null;
  expected_duration: number | null;
  participants: string[];
  generated_agenda: string[];
  generated_materials: string[];
  status: string;
  created_at: string;
}

const UserMeetingsList = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchMeetings();
    }
  }, [user]);

  const fetchMeetings = async () => {
    try {
      const { data, error } = await supabase
        .from('meetings')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setMeetings(data || []);
    } catch (error: any) {
      console.error('获取会议数据时出错:', error);
      toast({
        title: "加载失败",
        description: "无法加载会议列表，请刷新页面重试",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteMeeting = async (meetingId: string) => {
    try {
      const { error } = await supabase
        .from('meetings')
        .delete()
        .eq('id', meetingId);

      if (error) {
        throw error;
      }

      setMeetings(meetings.filter(meeting => meeting.id !== meetingId));
      toast({
        title: "删除成功",
        description: "会议已成功删除"
      });
    } catch (error: any) {
      console.error('删除会议时出错:', error);
      toast({
        title: "删除失败",
        description: error.message || "删除会议时发生错误",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      draft: { label: "草稿", variant: "secondary" as const },
      sent: { label: "已发送", variant: "default" as const },
      completed: { label: "已完成", variant: "default" as const },
      cancelled: { label: "已取消", variant: "destructive" as const }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.draft;
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (meetings.length === 0) {
    return (
      <Card className="digital-card">
        <CardContent className="p-8 text-center">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">暂无会议记录</h3>
          <p className="text-gray-600 mb-4">您还没有创建任何会议，开始创建您的第一个会议吧！</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">我的会议</h2>
        <Badge variant="outline">{meetings.length} 个会议</Badge>
      </div>

      <div className="grid gap-6">
        {meetings.map((meeting) => (
          <Card key={meeting.id} className="digital-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    {meeting.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {meeting.purpose}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(meeting.status)}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {meeting.meeting_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{new Date(meeting.meeting_date).toLocaleDateString('zh-CN')}</span>
                  </div>
                )}
                
                {meeting.meeting_time && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{meeting.meeting_time}</span>
                  </div>
                )}
                
                {meeting.expected_duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{meeting.expected_duration}分钟</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{meeting.participants.length} 人参会</span>
                </div>
              </div>

              {meeting.generated_agenda.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    议程概览
                  </h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {meeting.generated_agenda.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Badge variant="outline" className="text-xs">{index + 1}</Badge>
                        <span>{item}</span>
                      </div>
                    ))}
                    {meeting.generated_agenda.length > 3 && (
                      <p className="text-xs text-gray-500 ml-6">
                        还有 {meeting.generated_agenda.length - 3} 项议程...
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-xs text-gray-500">
                  创建于 {new Date(meeting.created_at).toLocaleString('zh-CN')}
                </span>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteMeeting(meeting.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserMeetingsList;