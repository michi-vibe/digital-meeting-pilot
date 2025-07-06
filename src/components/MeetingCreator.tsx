
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  Clock,
  FileText,
  Bot,
  Sparkles,
  CheckCircle,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MeetingCreator = () => {
  const [meetingData, setMeetingData] = useState({
    title: "",
    purpose: "",
    date: "",
    time: "",
    participants: [] as string[],
    expectedDuration: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAgenda, setGeneratedAgenda] = useState<string[]>([]);
  const [generatedMaterials, setGeneratedMaterials] = useState<string[]>([]);
  const { toast } = useToast();

  const handleGenerateAgenda = async () => {
    if (!meetingData.title || !meetingData.purpose) {
      toast({
        title: "信息不完整",
        description: "请填写会议主题和目的",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // 模拟AI生成议程
    setTimeout(() => {
      const agendaItems = [
        "会议开场和参会人员介绍 (5分钟)",
        "会议目标和议程说明 (5分钟)",
        `${meetingData.purpose}核心议题讨论 (20分钟)`,
        "问题解答和意见收集 (10分钟)",
        "下一步行动计划制定 (10分钟)",
        "会议总结和结束 (5分钟)"
      ];
      
      const materialItems = [
        "会议演示文稿模板",
        "相关数据报告",
        "行业背景资料",
        "项目进度文档",
        "决策参考材料"
      ];

      setGeneratedAgenda(agendaItems);
      setGeneratedMaterials(materialItems);
      setIsGenerating(false);
      
      toast({
        title: "智能生成完成",
        description: "数字分身已为您生成初步议程和材料清单"
      });
    }, 2000);
  };

  const handleSendRequest = () => {
    toast({
      title: "会议请求已发送",
      description: "数字分身正在向参会人员发送会议邀请"
    });
  };

  return (
    <div className="space-y-6">
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            发起会议请求
          </CardTitle>
          <CardDescription>
            填写会议基本信息，数字分身将自动生成议程和材料清单
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左侧输入区域 */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">会议主题</Label>
                <Input
                  id="title"
                  placeholder="请输入简洁明确的会议主题"
                  value={meetingData.title}
                  onChange={(e) => setMeetingData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="purpose">会议目的</Label>
                <Textarea
                  id="purpose"
                  placeholder="请详细描述会议目的和期望达成的目标"
                  rows={4}
                  value={meetingData.purpose}
                  onChange={(e) => setMeetingData(prev => ({ ...prev, purpose: e.target.value }))}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">期望日期</Label>
                  <Input
                    id="date"
                    type="date"
                    value={meetingData.date}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="time">期望时间</Label>
                  <Input
                    id="time"
                    type="time"
                    value={meetingData.time}
                    onChange={(e) => setMeetingData(prev => ({ ...prev, time: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label>预计时长</Label>
                <Select value={meetingData.expectedDuration} onValueChange={(value) => setMeetingData(prev => ({ ...prev, expectedDuration: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择会议时长" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30分钟</SelectItem>
                    <SelectItem value="60">1小时</SelectItem>
                    <SelectItem value="90">1.5小时</SelectItem>
                    <SelectItem value="120">2小时</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* 右侧参会人员选择 */}
            <div className="space-y-4">
              <Label>参会人员</Label>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {["张三 - 产品经理", "李四 - 技术主管", "王五 - 设计师", "赵六 - 运营专员"].map((person, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{person}</span>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">AI助手建议</p>
                    <p className="text-sm text-blue-700">
                      根据会议主题，建议邀请相关部门负责人参与，确保决策效率
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex justify-center">
            <Button 
              onClick={handleGenerateAgenda}
              disabled={isGenerating}
              className="digital-button"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Bot className="w-5 h-5 mr-2 animate-spin" />
                  数字分身生成中...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  智能生成议程和材料清单
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 生成结果展示 */}
      {(generatedAgenda.length > 0 || generatedMaterials.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="digital-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                智能生成议程
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generatedAgenda.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="digital-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                材料准备要求
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {generatedMaterials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {generatedAgenda.length > 0 && (
        <div className="flex justify-center">
          <Button onClick={handleSendRequest} className="digital-button" size="lg">
            <Users className="w-5 h-5 mr-2" />
            确认并发送会议请求
          </Button>
        </div>
      )}
    </div>
  );
};

export default MeetingCreator;
