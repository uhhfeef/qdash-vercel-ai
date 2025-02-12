import { useState, useRef, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useChat } from "@ai-sdk/react";
import { ChatInput } from "./components/ChatInput";
import { ArrowUp, Paperclip } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Form } from "@remix-run/react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";

export const meta: MetaFunction = () => {
  return [
    { title: "Chat Interface" },
    { name: "description", content: "A simple chat interface" },
  ];
};

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Index() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/chat'
  });

  return (
    <>
      {/* {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="prompt" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form> */}
      <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden">
        <div className="h-full flex flex-col items-center w-full max-w-3xl mx-auto">
          <div className="flex-grow overflow-auto w-full p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div className="flex py-3 gap-2" key={index}>
                <Avatar className="h-8 w-8">
                  {message.role === 'user' ? (
                    <AvatarFallback>U</AvatarFallback>
                  ) : (
                    <AvatarFallback>AI</AvatarFallback>
                  )}
                </Avatar>
                <div className="px-4 rounded-lg max-w-[80%]">
                  <p className="text-sm text-gray-900">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <Form className="w-full" method="post" onSubmit={handleSubmit}>
            <div className="w-full px-4 pb-4 flex-shrink-0 fixed bottom-0 left-1/2 -translate-x-1/2 bg-white max-w-3xl">
              <div className="relative">
                <Input 
                  name="message"
                  className="rounded-2xl py-6 pr-24 pb-16 text-base shadow-sm border border-gray-300 focus-visible:ring-gray-200" 
                  onChange={handleInputChange}
                  value={input}
                />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                  <Input
                    type="file"
                    className="hidden"
                    accept=".csv,.xls,.xlsx" 
                    multiple
                    id="file-upload"
                  />            
                  <Button size="icon" variant="ghost" className="border p-3 hover:bg-gray-100 rounded-xl">
                    <label htmlFor="file-upload">
                      <Paperclip className="rounded-md h-8 w-8 text-gray-600" />
                    </label>
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-gray-100 hover:bg-black text-gray-600 hover:text-white p-3 rounded-full" asChild>
                    <ArrowUp className="h-8 w-8" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center pt-2 text-xs text-gray-500">
                QDash may make mistakes. Please use with discretion.
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
