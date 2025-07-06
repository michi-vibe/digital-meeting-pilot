
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Bot,
  Zap,
  TrendingUp,
  Server,
  Cpu,
  HardDrive,
  Wifi
} from "lucide-react";

const SystemStats = () => {
  return (
    <div className="space-y-6">
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-green-500" />
            系统运行状态
          </CardTitle>
          <CardDescription>
            监控数字分身系统的运行状态和性能指标
          </CardDescription>
        </CardHeader>
      </Card>

      {/* 系统概览 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="digital-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">系统状态</p>
                <Badge className="bg-green-100 text-green-700 mt-1">
                  <Activity className="w-3 h-3 mr-1" />
                  正常运行
                </Badge>
              </div>
              <Server className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="digital-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">活跃分身</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <Bot className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="digital-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">处理任务</p>
                <p className="text-2xl font-bold text-orange-600">156</p>
              </div>
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="digital-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">响应时间</p>
                <p className="text-2xl font-bold text-purple-600">0.8s</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 性能监控 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="digital-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-500" />
              系统资源使用
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>CPU使用率</span>
                <span>65%</span>
              </div>
              <Progress value={65} />
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>内存使用率</span>
                <span>42%</span>
              </div>
              <Progress value={42} />
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>存储使用率</span>
                <span>78%</span>
              </div>
              <Progress value={78} />
            </div>
          </CardContent>
        </Card>

        <Card className="digital-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-green-500" />
              数字分身性能
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>任务成功率</span>
                <span>98.5%</span>
              </div>
              <Progress value={98.5} />
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>智能推荐准确率</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} />
            </div>
            
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>用户满意度</span>
                <span>96.8%</span>
              </div>
              <Progress value={96.8} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 实时活动 */}
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" />
            实时活动监控
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="font-medium text-blue-900">议程生成</p>
                <p className="text-sm text-blue-700">数字分身#12正在为"产品发布会"生成议程</p>
                <p className="text-xs text-blue-600">2分钟前</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="font-medium text-green-900">材料搜索完成</p>
                <p className="text-sm text-green-700">数字分身#8已完成技术评审会议材料搜索</p>
                <p className="text-xs text-green-600">5分钟前</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="font-medium text-orange-900">通知发送</p>
                <p className="text-sm text-orange-700">数字分身#5向15名参会人员发送了会议通知</p>
                <p className="text-xs text-orange-600">8分钟前</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemStats;
