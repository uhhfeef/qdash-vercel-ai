import { ActionFunction, json } from '@remix-run/node';
import { streamText } from 'ai'; 
import { openai } from '@ai-sdk/openai';


export const action: ActionFunction = async ({ request, params }) => {
    const { messages } = await request.json();

    const result = streamText({
        model: openai('gpt-4o-mini'),
        system: 'You are a helpful assistant. If the user asks for code, generate it within <code></code> tags. No fluff.',
        messages,
      });
    
    return result.toDataStreamResponse();
}
    
