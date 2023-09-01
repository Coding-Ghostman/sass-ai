"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare, ImageIcon, MusicIcon, VideoIcon, Code, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        label: "Image Generator",
        icon: ImageIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        href: "/image",
    },
    {
        label: "Video Generator",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/video",
    },
    {
        label: "Music Generator",
        icon: MusicIcon,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music",
    },
    {
        label: "Code Generator",
        icon: Code,
        color: "text-lime-500",
        bgColor: "bg-lime-500/10",
        href: "/code",
    },
];

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
                <p className="text-muted-foreground font-light txt-sm md:text-lg text-center">Experience the power of AI using prompts and chats</p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card key={tool.href} onClick={() => router.push(tool.href)} className="p-4 border-black/10 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">{tool.label}</div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    );
}
