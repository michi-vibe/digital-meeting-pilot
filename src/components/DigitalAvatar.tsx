
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import {
  Bot,
  MessageCircle,
  Settings,
  Activity,
  Zap,
  Send,
  Mic,
  Volume2,
  Brain,
  Clock,
  Target,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  FileText
} from "lucide-react";

const DigitalAvatar = () => {
  const [isActive, setIsActive] = useState(true);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "ai", message: "您好！我是您的数字分身，随时为您服务。今天需要我帮您处理什么会议任务吗？", time: "14:30" },
    { type: "user", message: "帮我准备明天的项目评审会议", time: "14:32" },
    { type: "ai", message: "好的！我已经开始为您准备项目评审会议的相关材料。预计15分钟内完成议程草案和材料清单。", time: "14:32" }
  ]);
  const [intelligentSettings, setIntelligentSettings] = useState({
    autoSchedule: true,
    smartReminder: true,
    materialAutoSearch: true,
    voiceInteraction: false,
    learningMode: true
  });

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory(prev => [...prev, 
        { type: "user", message: chatMessage, time: new Date().toLocaleTimeString().slice(0, 5) }
      ]);
      setChatMessage("");
      
      // 模拟AI回复
      setTimeout(() => {
        setChatHistory(prev => [...prev, 
          { type: "ai", message: "我理解了您的需求，正在为您智能分析和处理...", time: new Date().toLocaleTimeString().slice(0, 5) }
        ]);
      }, 1000);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative p-0">
          <Avatar className={`w-10 h-10 ${isActive ? 'avatar-glow' : ''}`}>
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Bot className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
          {isActive && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0" align="end">
        <Tabs defaultValue="status" className="w-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="w-12 h-12 avatar-glow">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Bot className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">我的数字分身</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <Activity className="w-3 h-3 mr-1" />
                    在线
                  </Badge>
                  <Badge variant="outline">
                    <Zap className="w-3 h-3 mr-1" />
                    智能模式
                  </Badge>
                </div>
              </div>
            </div>
            
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="status">状态</TabsTrigger>
              <TabsTrigger value="chat">对话</TabsTrigger>
              <TabsTrigger value="settings">设置</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="status" className="p-4 space-y-4">
            {/* 智能状态概览 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500" />
                  智能分析状态
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    学习能力
                  </span>
                  <span className="font-medium text-green-600">活跃</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    任务处理
                  </span>
                  <span className="font-medium text-blue-600">进行中</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    材料搜索
                  </span>
                  <span className="font-medium text-orange-600">待机</span>
                </div>
              </CardContent>
            </Card>

            {/* 今日任务完成情况 */}
            <div className="text-sm">
              <p className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                今日智能处理统计
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    会议安排
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">5个</span>
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <FileText className="w-3 h-3" />
                    材料搜索
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">12次</span>
                    <TrendingUp className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    通知发送
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">28条</span>
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* 智能建议 */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  <Brain className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900 text-sm">AI智能建议</p>
                    <p className="text-xs text-blue-700 mt-1">
                      检测到您下周有3个重要会议，建议提前2天开始材料准备，可提升效率约40%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="p-0">
            {/* 聊天界面 */}
            <div className="h-80 flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      chat.type === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p>{chat.message}</p>
                      <p className={`text-xs mt-1 ${
                        chat.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {chat.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t bg-gray-50">
                <div className="flex gap-2">
                  <Input
                    placeholder="与数字分身对话..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button size="sm" onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mic className="w-3 h-3 mr-1" />
                    语音
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Volume2 className="w-3 h-3 mr-1" />
                    朗读
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="p-4 space-y-4">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                智能模式配置
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">自动会议安排</Label>
                    <p className="text-xs text-gray-500">允许分身自动安排和调整会议时间</p>
                  </div>
                  <Switch 
                    checked={intelligentSettings.autoSchedule}
                    onCheckedChange={(checked) => 
                      setIntelligentSettings(prev => ({...prev, autoSchedule: checked}))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">智能提醒</Label>
                    <p className="text-xs text-gray-500">基于历史数据智能设置提醒时间</p>
                  </div>
                  <Switch 
                    checked={intelligentSettings.smartReminder}
                    onCheckedChange={(checked) => 
                      setIntelligentSettings(prev => ({...prev, smartReminder: checked}))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">材料自动搜索</Label>
                    <p className="text-xs text-gray-500">自动搜索和准备相关会议材料</p>
                  </div>
                  <Switch 
                    checked={intelligentSettings.materialAutoSearch}
                    onCheckedChange={(checked) => 
                      setIntelligentSettings(prev => ({...prev, materialAutoSearch: checked}))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">语音交互</Label>
                    <p className="text-xs text-gray-500">启用语音对话功能</p>
                  </div>
                  <Switch 
                    checked={intelligentSettings.voiceInteraction}
                    onCheckedChange={(checked) => 
                      setIntelligentSettings(prev => ({...prev, voiceInteraction: checked}))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">学习模式</Label>
                    <p className="text-xs text-gray-500">根据使用习惯不断优化服务</p>
                  </div>
                  <Switch 
                    checked={intelligentSettings.learningMode}
                    onCheckedChange={(checked) => 
                      setIntelligentSettings(prev => ({...prev, learningMode: checked}))
                    }
                  />
                </div>
              </div>
            </div>

            {/* 性能统计 */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">分身性能指标</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>任务成功率</span>
                  <span className="font-medium text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>平均响应时间</span>
                  <span className="font-medium">1.2秒</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>学习进度</span>
                  <span className="font-medium text-blue-600">进阶级</span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              高级设置
            </Button>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default DigitalAvatar;
