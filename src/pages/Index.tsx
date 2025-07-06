import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Users, 
  FileText, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Bot,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  User
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import DigitalAvatar from "@/components/DigitalAvatar";
import DigitalAvatarChat from "@/components/DigitalAvatarChat";
import MeetingCreator from "@/components/MeetingCreator";
import MeetingDashboard from "@/components/MeetingDashboard";
import MaterialManager from "@/components/MaterialManager";
import SystemStats from "@/components/SystemStats";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // 如果未登录，重定向到认证页面
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  // 如果正在加载或未登录，显示加载状态
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Bot className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">正在加载...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  数字分身会议平台
                </h1>
                <p className="text-sm text-gray-600">智能AI助手 · 高效协作</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                <div className="status-indicator bg-green-500"></div>
                <span className="text-sm text-green-700 font-medium">AI助手在线</span>
              </div>
              
              {/* 用户信息 */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium">
                    {user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  退出
                </Button>
              </div>
              
              <DigitalAvatar />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              概览
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              发起会议
            </TabsTrigger>
            <TabsTrigger value="meetings" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              会议管理
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              材料中心
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              系统状态
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                欢迎使用数字分身会议平台
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                让AI数字分身帮您处理会议的全流程管理，从发起到材料汇总，实现真正的智能协作
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="digital-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">今日会议</p>
                      <p className="text-2xl font-bold text-blue-600">8</p>
                    </div>
                    <Calendar className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="digital-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">活跃数字分身</p>
                      <p className="text-2xl font-bold text-green-600">24</p>
                    </div>
                    <Bot className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="digital-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">材料准备中</p>
                      <p className="text-2xl font-bold text-orange-600">12</p>
                    </div>
                    <FileText className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="digital-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">效率提升</p>
                      <p className="text-2xl font-bold text-purple-600">89%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities and Chat */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="digital-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-500" />
                    最近活动
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">数字分身已为"季度总结会议"生成议程</p>
                      <p className="text-sm text-gray-600">2分钟前</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">所有参会人员已确认参加项目启动会</p>
                      <p className="text-sm text-gray-600">15分钟前</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">会议室A201预定成功</p>
                      <p className="text-sm text-gray-600">1小时前</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 数字分身对话界面 */}
              <DigitalAvatarChat />
            </div>

            {/* AI助手建议卡片 */}
            <Card className="digital-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  AI助手建议
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">优化建议</p>
                  <p className="text-sm text-blue-700">建议将明天的3个会议合并为1个综合会议，可节省2小时时间</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">效率提醒</p>
                  <p className="text-sm text-green-700">本周会议材料准备效率比上周提升35%</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <MeetingCreator />
          </TabsContent>

          <TabsContent value="meetings">
            <MeetingDashboard />
          </TabsContent>

          <TabsContent value="materials">
            <MaterialManager />
          </TabsContent>

          <TabsContent value="stats">
            <SystemStats />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
