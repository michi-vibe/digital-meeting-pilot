
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Zap
} from "lucide-react";

const DigitalAvatar = () => {
  const [isActive, setIsActive] = useState(true);

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
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
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
        </div>
        
        <div className="p-4 space-y-3">
          <div className="text-sm">
            <p className="font-medium text-gray-700 mb-2">今日处理任务</p>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">会议安排</span>
                <span className="font-medium">5个</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">材料搜索</span>
                <span className="font-medium">12次</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">通知发送</span>
                <span className="font-medium">28条</span>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-3 space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <MessageCircle className="w-4 h-4 mr-2" />
              与分身对话
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              分身设置
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DigitalAvatar;
