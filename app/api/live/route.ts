import { NextResponse } from "next/server";
import { getLiveStream } from "@/lib/youtube";

export async function GET() {
    try {
        const videoId = await getLiveStream();
        return NextResponse.json({ videoId });
    } catch {
        return NextResponse.json({ videoId: undefined });
    }
}
