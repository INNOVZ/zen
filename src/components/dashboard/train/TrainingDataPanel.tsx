// "use client";

// import { useState } from "react";
// import {
//   Upload,
//   Globe,
//   FileText,
//   Trash2,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";
// import { chatbotApi } from "@/app/api/routes";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface TrainingData {
//   id: string;
//   type: "pdf" | "url" | "text";
//   name: string;
//   status: "processing" | "completed" | "failed";
//   size?: string;
//   addedAt: Date;
// }

// interface TrainingDataPanelProps {
//   className?: string;
// }

// export default function TrainingDataPanel({
//   className = "",
// }: TrainingDataPanelProps) {
//   const [trainingData, setTrainingData] = useState<TrainingData[]>([
//     {
//       id: "1",
//       type: "pdf",
//       name: "Product Documentation.pdf",
//       status: "completed",
//       size: "2.4 MB",
//       addedAt: new Date(Date.now() - 86400000), // 1 day ago
//     },
//     {
//       id: "2",
//       type: "url",
//       name: "https://example.com/faq",
//       status: "completed",
//       size: "156 KB",
//       addedAt: new Date(Date.now() - 3600000), // 1 hour ago
//     },
//     {
//       id: "3",
//       type: "url",
//       name: "https://example.com/support",
//       status: "processing",
//       addedAt: new Date(Date.now() - 600000), // 10 minutes ago
//     },
//   ]);

//   const [newUrl, setNewUrl] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleAddUrl = async () => {
//     if (!newUrl.trim()) return;

//     const newData: TrainingData = {
//       id: Date.now().toString(),
//       type: "url",
//       name: newUrl,
//       status: "processing",
//       addedAt: new Date(),
//     };

//     setTrainingData((prev) => [newData, ...prev]);
//     setNewUrl("");
//     setIsProcessing(true);

//     try {
//       await chatbotApi.uploadUrl(newUrl);
//       // Update status to completed
//       setTrainingData((prev) =>
//         prev.map((item) =>
//           item.id === newData.id
//             ? { ...item, status: "completed", size: "89 KB" }
//             : item
//         )
//       );
//     } catch (error) {
//       console.error("Error adding URL:", error);
//       // Update status to failed
//       setTrainingData((prev) =>
//         prev.map((item) =>
//           item.id === newData.id ? { ...item, status: "failed" } : item
//         )
//       );
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const handleFileUpload = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const newData: TrainingData = {
//       id: Date.now().toString(),
//       type: file.type === "application/pdf" ? "pdf" : "text",
//       name: file.name,
//       status: "processing",
//       size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
//       addedAt: new Date(),
//     };

//     setTrainingData((prev) => [newData, ...prev]);

//     try {
//       await chatbotApi.uploadFile(file, file.name);
//       // Update status to completed
//       setTrainingData((prev) =>
//         prev.map((item) =>
//           item.id === newData.id ? { ...item, status: "completed" } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       // Update status to failed
//       setTrainingData((prev) =>
//         prev.map((item) =>
//           item.id === newData.id ? { ...item, status: "failed" } : item
//         )
//       );
//     }

//     // Reset the file input
//     event.target.value = "";
//   };

//   const handleDelete = (id: string) => {
//     setTrainingData((prev) => prev.filter((item) => item.id !== id));
//   };

//   const getStatusIcon = (status: TrainingData["status"]) => {
//     switch (status) {
//       case "completed":
//         return <CheckCircle className="h-4 w-4 text-green-600" />;
//       case "processing":
//         return (
//           <AlertCircle className="h-4 w-4 text-yellow-600 animate-pulse" />
//         );
//       case "failed":
//         return <AlertCircle className="h-4 w-4 text-red-600" />;
//       default:
//         return null;
//     }
//   };

//   const getTypeIcon = (type: TrainingData["type"]) => {
//     switch (type) {
//       case "pdf":
//         return <FileText className="h-4 w-4 text-red-600" />;
//       case "url":
//         return <Globe className="h-4 w-4 text-blue-600" />;
//       case "text":
//         return <FileText className="h-4 w-4 text-gray-600" />;
//       default:
//         return null;
//     }
//   };

//   const completedData = trainingData.filter(
//     (item) => item.status === "completed"
//   );
//   const totalSize = completedData.reduce((acc, item) => {
//     const size = parseFloat(item.size?.split(" ")[0] || "0");
//     const unit = item.size?.split(" ")[1];
//     return acc + (unit === "MB" ? size : size / 1024);
//   }, 0);

//   return (
//     <Card className={`h-[600px] flex flex-col ${className}`}>
//       <CardHeader>
//         <CardTitle className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Upload className="h-5 w-5 text-blue-600" />
//             Training Data
//           </div>
//           <Badge variant="secondary">
//             {completedData.length} sources • {totalSize.toFixed(1)} MB
//           </Badge>
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="flex-1 flex flex-col space-y-4">
//         {/* Add URL Section */}
//         <div className="space-y-2">
//           <div className="flex gap-2">
//             <Input
//               value={newUrl}
//               onChange={(e) => setNewUrl(e.target.value)}
//               placeholder="Enter website URL to train from..."
//               className="flex-1"
//             />
//             <Button
//               onClick={handleAddUrl}
//               disabled={!newUrl.trim() || isProcessing}
//               size="sm"
//             >
//               <Globe className="h-4 w-4 mr-1" />
//               Add URL
//             </Button>
//           </div>
//         </div>

//         {/* File Upload Section */}
//         <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
//           <input
//             type="file"
//             id="file-upload"
//             className="hidden"
//             onChange={handleFileUpload}
//             accept=".pdf,.txt,.docx"
//           />
//           <label
//             htmlFor="file-upload"
//             className="cursor-pointer flex flex-col items-center justify-center space-y-2"
//           >
//             <Upload className="h-8 w-8 text-gray-400" />
//             <span className="text-sm text-gray-600">
//               Click to upload PDF, TXT, or DOCX files
//             </span>
//             <span className="text-xs text-gray-400">Max file size: 10MB</span>
//           </label>
//         </div>

//         {/* Training Data List */}
//         <div className="flex-1 overflow-y-auto space-y-2">
//           <h3 className="text-sm font-medium text-gray-700 mb-2">
//             Current Training Sources
//           </h3>
//           {trainingData.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <FileText className="h-12 w-12 mx-auto mb-2 text-gray-300" />
//               <p>No training data added yet</p>
//               <p className="text-xs">Add URLs or upload files to get started</p>
//             </div>
//           ) : (
//             trainingData.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
//               >
//                 <div className="flex items-center gap-3 flex-1 min-w-0">
//                   {getTypeIcon(item.type)}
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium truncate">{item.name}</p>
//                     <div className="flex items-center gap-2 text-xs text-gray-500">
//                       <span>
//                         {item.addedAt.toLocaleDateString()} at{" "}
//                         {item.addedAt.toLocaleTimeString()}
//                       </span>
//                       {item.size && <span>• {item.size}</span>}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   {getStatusIcon(item.status)}
//                   <Badge
//                     variant={
//                       item.status === "completed"
//                         ? "default"
//                         : item.status === "processing"
//                         ? "secondary"
//                         : "destructive"
//                     }
//                     className="text-xs"
//                   >
//                     {item.status}
//                   </Badge>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="h-6 w-6 p-0"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     <Trash2 className="h-3 w-3" />
//                   </Button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Quick Stats */}
//         <div className="border-t pt-4 grid grid-cols-3 gap-4 text-center">
//           <div>
//             <p className="text-lg font-semibold text-blue-600">
//               {completedData.length}
//             </p>
//             <p className="text-xs text-gray-500">Active Sources</p>
//           </div>
//           <div>
//             <p className="text-lg font-semibold text-green-600">
//               {totalSize.toFixed(1)} MB
//             </p>
//             <p className="text-xs text-gray-500">Total Data</p>
//           </div>
//           <div>
//             <p className="text-lg font-semibold text-purple-600">
//               {
//                 trainingData.filter((item) => item.status === "processing")
//                   .length
//               }
//             </p>
//             <p className="text-xs text-gray-500">Processing</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
