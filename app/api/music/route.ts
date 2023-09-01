import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import Configuration from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!Configuration) {
            return new NextResponse("OpenAI API key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Prompt Required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
        });

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
