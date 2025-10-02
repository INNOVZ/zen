// "use client";

// import { useState, useEffect } from "react";
// import { Bot, Settings, CheckCircle, AlertCircle } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { chatbotApi } from "@/app/api/routes";
// import { ChatbotInfo } from "@/types/schemaTypes";

// interface ChatbotSelectorProps {
//   onSelectChatbot?: (chatbotId: string) => void;
//   selectedChatbotId?: string;
// }

// export default function ChatbotSelector({ 
//   onSelectChatbot, 
//   selectedChatbotId 
// }: ChatbotSelectorProps) {
//   const [chatbots, setChatbots] = useState<ChatbotInfo[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadChatbots = async () => {
//       try {
//         setLoading(true);
//         const data = await chatbotApi.getChatbots();
//         setChatbots(data || []);
//       } catch (err) {
//         console.error("Error loading chatbots:", err);
//         setError("Failed to load chatbots");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadChatbots();
//   }, []);

//   if (loading) {
//     return (
//       <Card>
//         <CardContent className="flex items-center justify-center p-8">
//           <div className="text-center">
//             <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
//             <p className="text-gray-500">Loading chatbots...</p>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }

//   if (error) {
//     return (
//       <Card>
//         <CardContent className="flex items-center justify-center p-8">
//           <div className="text-center">
//             <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
//             <p className="text-red-600">{error}</p>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }

//   if (chatbots.length === 0) {
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Bot className="h-5 w-5" />
//             Available Chatbots
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-center py-8">
//             <Bot className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No Chatbots Found</h3>
//             <p className="text-gray-500 mb-4">
//               No chatbots are configured for your organization yet.
//             </p>
//             <Button variant="outline">
//               <Settings className="w-4 h-4 mr-2" />
//               Create Chatbot
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <Bot className="h-5 w-5" />
//           Available Chatbots ({chatbots.length})
//         </CardTitle>
//       </CardHeader>
//       <Card className="space-y-4">
//         {chatbots.map((chatbot) => (
//           <div
//             key={chatbot.id}
//             className={`p-4 border rounded-lg cursor-pointer transition-all ${
//               selectedChatbotId === chatbot.id
//                 ? "border-blue-500 bg-blue-50"
//                 : "border-gray-200 hover:border-gray-300"
//             }`}
//             onClick={() => onSelectChatbot?.(chatbot.id)}
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex items-start gap-3 flex-1">
//                 <div
//                   className="w-10 h-10 rounded-full flex items-center justify-center"
//                   style={{ backgroundColor: chatbot.color_hex || "#3B82F6" }}
//                 >
//                   {chatbot.avatar_url ? (
//                     <img
//                       src={chatbot.avatar_url}
//                       alt={chatbot.name}
//                       className="w-8 h-8 rounded-full"
//                     />
//                   ) : (
//                     <Bot className="h-5 w-5 text-white" />
//                   )}
//                 </div>
                
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <h3 className="font-medium text-gray-900">{chatbot.name}</h3>
//                     {selectedChatbotId === chatbot.id && (
//                       <CheckCircle className="w-4 h-4 text-blue-500" />
//                     )}
//                   </div>
                  
//                   <p className="text-sm text-gray-600 mb-2">
//                     {chatbot.description || "No description available"}
//                   </p>
                  
//                   <div className="flex items-center gap-2 flex-wrap">
//                     <Badge 
//                       variant={chatbot.chain_status === "active" ? "default" : "secondary"}
//                       className="text-xs"
//                     >
//                       {chatbot.chain_status || "inactive"}
//                     </Badge>
                    
//                     {chatbot.tone && (
//                       <Badge variant="outline" className="text-xs">
//                         {chatbot.tone} tone
//                       </Badge>
//                     )}
                    
//                     <span className="text-xs text-gray-500">
//                       ID: {chatbot.id.substring(0, 8)}...
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {chatbot.greeting_message && (
//               <div className="mt-3 p-2 bg-gray-50 rounded text-sm text-gray-600 italic">
//                 "{chatbot.greeting_message}"
//               </div>
//             )}
//           </div>
//         ))}
        
//         <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
//           <p className="text-sm text-blue-800">
//             <strong>💡 Tip:</strong> The chat widget will automatically use the active chatbot, 
//             or you can specify a particular chatbot ID when embedding the widget.
//           </p>
//         </div>
//       </Card