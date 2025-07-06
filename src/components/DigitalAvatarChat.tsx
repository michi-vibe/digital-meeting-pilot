
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Bot,
  Send,
  Mic,
  Volume2,
  MessageCircle
} from "lucide-react";

const DigitalAvatarChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "ai", message: "您好！我是您的数字分身助手，随时为您服务。今天需要我帮您处理什么会议任务吗？", time: "14:30" },
    { type: "user", message: "帮我准备明天的项目评审会议", time: "14:32" },
    { type: "ai", message: "好的！我已经开始为您准备项目评审会议的相关材料。预计15分钟内完成议程草案和材料清单。", time: "14:32" }
  ]);

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
    <Card className="digital-card h-96">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <Avatar className="w-8 h-8 avatar-glow">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Bot className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            与数字分身对话
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col h-80">
        {/* 聊天历史 */}
        <div className="flex-1 px-6 overflow-y-auto space-y-3">
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
        
        {/* 输入区域 */}
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
      </CardContent>
    </Card>
  );
};

export default DigitalAvatarChat;
