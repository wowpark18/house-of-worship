"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const checkMobileShare = () => {
        if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
            return true;
        }
        return false;
    };

    const handleShare = async () => {
        if (checkMobileShare()) {
            try {
                await navigator.share({
                    title: title,
                    text: text,
                    url: url
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(`${text}\n\n${url}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (error) {
                console.error("Failed to copy:", error);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="px-6 py-2 border border-gray-200 dark:border-zinc-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2 group"
        >
            <Share2 size={16} className="text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
            {copied ? "복사되었습니다!" : "말씀 공유하기"}
        </button>
    );
}
