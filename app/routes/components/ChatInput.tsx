import { ArrowUp, Paperclip } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function ChatInput() {
    return (
        <div className="relative">
        <Input 
        name="message"
        className="rounded-2xl py-6 pr-24 pb-16 text-base shadow-sm border border-gray-300 focus-visible:ring-gray-200" 
        
        />
        <div className="absolute bottom-2 left-2 right-2 flex justify-between ">
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
                <ArrowUp className=" h-8 w-8" />
            </Button>
        </div>
    </div>

    )
}