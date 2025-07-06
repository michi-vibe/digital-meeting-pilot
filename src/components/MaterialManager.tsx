
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Download,
  Search,
  Filter,
  Archive,
  Bot
} from "lucide-react";

const MaterialManager = () => {
  const materials = [
    {
      id: 1,
      name: "季度总结会议材料包",
      status: "completed",
      files: 12,
      size: "15.2 MB",
      progress: 100,
      meeting: "季度总结会议",
      aiGenerated: true
    },
    {
      id: 2,
      name: "产品规划相关资料",
      status: "preparing",
      files: 8,
      size: "8.7 MB",
      progress: 70,
      meeting: "产品规划讨论",
      aiGenerated: false
    },
    {
      id: 3,
      name: "技术架构文档集合",
      status: "searching",
      files: 5,
      size: "3.2 MB",
      progress: 45,
      meeting: "技术架构评审",
      aiGenerated: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">已完成</Badge>;
      case 'preparing':
        return <Badge className="bg-yellow-100 text-yellow-700">准备中</Badge>;
      case 'searching':
        return <Badge className="bg-blue-100 text-blue-700">搜索中</Badge>;
      default:
        return <Badge variant="outline">未知</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-500" />
            材料管理中心
          </CardTitle>
          <CardDescription>
            管理所有会议材料，跟踪数字分身搜索和整理进度
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              搜索材料
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              筛选条件
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              归档管理
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {materials.map((material) => (
          <Card key={material.id} className="digital-card">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{material.name}</h3>
                      {material.aiGenerated && (
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          <Bot className="w-3 h-3 mr-1" />
                          AI生成
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">关联会议：{material.meeting}</p>
                  </div>
                  {getStatusBadge(material.status)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="text-sm">
                    <span className="text-gray-600">文件数量：</span>
                    <span className="font-medium">{material.files}个</span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-gray-600">总大小：</span>
                    <span className="font-medium">{material.size}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>准备进度</span>
                      <span>{material.progress}%</span>
                    </div>
                    <Progress value={material.progress} />
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    {material.status === 'completed' && (
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        下载
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      查看详情
                    </Button>
                  </div>
                </div>

                {/* AI处理状态 */}
                <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">数字分身处理状态：</span>
                    {material.status === 'completed' && (
                      <span className="text-green-600">材料整理完成，已生成统一格式</span>
                    )}
                    {material.status === 'preparing' && (
                      <span className="text-yellow-600">正在整理和格式化材料</span>
                    )}
                    {material.status === 'searching' && (
                      <span className="text-blue-600">正在从知识库和网络搜索相关资料</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 快速操作区 */}
      <Card className="digital-card">
        <CardHeader>
          <CardTitle className="text-base">快速操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Search className="w-8 h-8 mb-2 text-blue-500" />
              <span>智能搜索材料</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Archive className="w-8 h-8 mb-2 text-green-500" />
              <span>批量整理归档</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Download className="w-8 h-8 mb-2 text-purple-500" />
              <span>导出材料包</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaterialManager;
