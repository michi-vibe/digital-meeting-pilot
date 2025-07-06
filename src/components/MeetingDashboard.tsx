
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  MapPin,
  FileText,
  Calendar
} from "lucide-react";

const MeetingDashboard = () => {
  const [meetings] = useState([
    {
      id: 1,
      title: "季度总结会议",
      date: "2024-01-15",
      time: "14:00",
      status: "confirmed",
      participants: 8,
      confirmed: 8,
      venue: "会议室A201",
      progress: 100
    },
    {
      id: 2,
      title: "产品规划讨论",
      date: "2024-01-16",
      time: "10:00",
      status: "pending",
      participants: 6,
      confirmed: 4,
      venue: "待预定",
      progress: 70
    },
    {
      id: 3,
      title: "技术架构评审",
      date: "2024-01-17",
      time: "15:30",
      status: "preparing",
      participants: 5,
      confirmed: 3,
      venue: "线上会议",
      progress: 45
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-700">已确认</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700">待确认</Badge>;
      case 'preparing':
        return <Badge className="bg-blue-100 text-blue-700">准备中</Badge>;
      default:
        return <Badge variant="outline">未知</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            会议管理中心
          </CardTitle>
          <CardDescription>
            查看和管理所有会议安排，跟踪数字分身处理进度
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="ongoing" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="ongoing">进行中</TabsTrigger>
          <TabsTrigger value="upcoming">即将开始</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>

        <TabsContent value="ongoing" className="space-y-4">
          <div className="grid gap-4">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="digital-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{meeting.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {meeting.date} {meeting.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {meeting.venue}
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(meeting.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>参会确认进度</span>
                          <span>{meeting.confirmed}/{meeting.participants}</span>
                        </div>
                        <Progress value={(meeting.confirmed / meeting.participants) * 100} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>整体进度</span>
                          <span>{meeting.progress}%</span>
                        </div>
                        <Progress value={meeting.progress} />
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          查看详情
                        </Button>
                        <Button variant="outline" size="sm">
                          <Users className="w-4 h-4 mr-1" />
                          管理参会人
                        </Button>
                      </div>
                    </div>

                    {/* 数字分身状态提示 */}
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">数字分身状态：</span>
                        {meeting.status === 'confirmed' && (
                          <span className="text-green-600">已完成所有准备工作</span>
                        )}
                        {meeting.status === 'pending' && (
                          <span className="text-yellow-600">正在等待参会人员确认</span>
                        )}
                        {meeting.status === 'preparing' && (
                          <span className="text-blue-600">正在搜索和准备会议材料</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <Card className="digital-card">
            <CardContent className="p-8 text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">暂无即将开始的会议</h3>
              <p className="text-gray-500">所有会议都在有序进行中</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card className="digital-card">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">暂无已完成的会议</h3>
              <p className="text-gray-500">完成的会议记录将在这里显示</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MeetingDashboard;
