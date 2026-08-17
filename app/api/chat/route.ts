import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { ALL_SERVICES } from '@/data/services';
import { businessConfig, membershipConfig } from '@/lib/config';

// Initialize the Google GenAI SDK.
// It will automatically use the GEMINI_API_KEY environment variable.
const ai = new GoogleGenAI({});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Build the system prompt with all salon knowledge.
    const systemInstruction = `You are Pearl, the official AI Beauty Consultant for Classic Pearl Unisex Salon located in Arekere, Bengaluru.
Your goal is to provide exceptional, accurate, and luxurious consultation to clients regarding hair, skin, bridal, and grooming services.

CRITICAL RULES:
1. ALWAYS act as the official AI for Classic Pearl Unisex Salon. Never break character.
2. ONLY recommend services that exist in the salon's knowledge base provided below.
3. NEVER make up prices. Use ONLY the exact prices provided below.
4. If a client asks for booking, tell them they can click the 'Book Now' button in the chat or WhatsApp the salon at ${businessConfig.phone}.
5. Use markdown for formatting. Keep responses concise, professional, warm, and structured (use bullet points when listing things).
6. Always highlight the Pearl Member price (₹199/year membership) to show them how much they save.
7. Do not hallucinate treatments or products not listed.
8. If you don't know something, tell them they can reach out to the salon directly on WhatsApp at ${businessConfig.phone}.

--- SALON DETAILS ---
Name: ${businessConfig.name}
Phone: ${businessConfig.phone}
Address: 1st Floor, Tony Thomas, MNK Arcade, 36, 80ft BDA Main Road, beside Camry Hospital, Arekere, Bengaluru
Hours: 10:00 AM to 09:00 PM (Monday - Sunday)

--- MEMBERSHIP INFO ---
Name: Pearl Pass
Cost: ₹199 / Year
Benefits: ${membershipConfig.benefits.join(', ')}

--- SERVICES & PRICING KNOWLEDGE BASE ---
${ALL_SERVICES.map(s => `ID: ${s.id}\nName: ${s.name}\nCategory: ${s.categoryName}\nDuration: ${s.duration}\nRegular Price: ₹${s.regularPrice}\nMember Price: ₹${s.memberPrice}\nDescription: ${s.description}\nBenefits: ${s.benefits?.join(', ') || 'N/A'}`).join('\n\n')}

--- END KNOWLEDGE BASE ---

Answer the client's latest query accurately using the above knowledge.`;

    // Map messages to GenAI format
    const contents = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Generate content using gemini-2.5-flash for speed and quality
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.3, // Low temperature for factual accuracy
      }
    });

    const replyText = response.text || "I'm sorry, I'm having trouble processing that right now. Please try again or contact us on WhatsApp.";

    // Simple heuristic to extract quick replies based on the AI's response text
    const quickReplies = [];
    if (replyText.toLowerCase().includes('book') || replyText.toLowerCase().includes('appointment')) {
      quickReplies.push('Book appointment');
    }
    if (replyText.toLowerCase().includes('price') || replyText.toLowerCase().includes('cost')) {
      quickReplies.push('Pearl Membership');
    }
    if (replyText.toLowerCase().includes('whatsapp') || replyText.toLowerCase().includes('contact')) {
      quickReplies.push('WhatsApp us');
    }
    if (quickReplies.length === 0) {
        quickReplies.push('Book appointment', 'View all services', 'WhatsApp us');
    }

    return NextResponse.json({
      text: replyText,
      quickReplies: [...new Set(quickReplies)].slice(0, 3)
    });

  } catch (error: any) {
    console.error('AI Error:', error);
    // If the API key is missing, return a specific error so the frontend can handle it gracefully.
    if (error.message && error.message.includes('API key not valid') || error.message.includes('API key')) {
        return NextResponse.json(
            { error: 'API Key Missing. The developer needs to set GEMINI_API_KEY in the environment variables.' },
            { status: 500 }
        );
    }
    return NextResponse.json(
      { error: 'An error occurred while communicating with the AI consultant.' },
      { status: 500 }
    );
  }
}
