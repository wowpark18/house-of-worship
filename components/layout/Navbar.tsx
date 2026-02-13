"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UseLiveStream } from "@/hooks/use-live-stream";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const liveVideoId = UseLiveStream();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Word", href: "/word" },
        { name: "Intro", href: "/intro" },
        { name: "Life", href: "/life" },
        { name: "Grace", href: "/grace" },
    ];

    const channelLink = "https://www.youtube.com/channel/UCCraM3Iz-rR6ZB2fRm0BvyQ";
    const liveLink = liveVideoId ? `https://www.youtube.com/watch?v=${liveVideoId}` : channelLink;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                isOpen ? "bg-black border-none" : (scrolled
                    ? "bg-black/90 backdrop-blur-md border-none shadow-sm"
                    : "bg-gradient-to-b from-black/70 to-transparent border-none")
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-inherit">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter group relative z-[70]">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-105">
                        <Image
                            src="/logo.png"
                            alt="House Of Worship Logo"
                            width={80}
                            height={80}
                            className="object-contain w-full h-full"
                            unoptimized
                        />
                    </div>
                    {/* Separator removed */}
                    <div className="hidden md:flex flex-col items-end leading-none">
                        <span>HOUSE OF WORSHIP</span>
                        <span className="text-xl">CHURCH</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-bold tracking-tighter hover:text-[var(--accent)] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2",
                            liveVideoId ? "bg-red-600 text-white animate-pulse" : "bg-[var(--accent)] text-white"
                        )}
                    >
                        {liveVideoId ? (
                            <>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                LIVE ON AIR
                            </>
                        ) : (
                            "Online Worship"
                        )}
                    </a>
                </div>

                {/* Mobile Menu Button - Z-index higher than overlay to be clickable */}
                <button
                    className="md:hidden text-inherit z-[70] relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={cn("transition-all duration-300 ease-in-out transform", isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100")}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black z-[60] flex flex-col justify-start pt-32 h-[100dvh] overflow-y-auto animate-in fade-in duration-200">

                    {/* Decorative Background Text */}
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2 opacity-10 pointer-events-none select-none z-0">
                        <span className="block text-9xl font-black tracking-tighter text-white">HOW</span>
                        <span className="block text-6xl font-black tracking-tighter text-white">CHURCH</span>
                    </div>

                    <div className="z-10 flex flex-col items-center space-y-8 text-center">
                        <p className="text-xs font-medium tracking-[0.3em] text-gray-400 uppercase mb-4">
                            2026 House Of Worship
                        </p>

                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-4xl md:text-5xl font-bold text-white hover:text-[var(--accent)] transition-colors tracking-tight animate-in slide-in-from-bottom-4 fade-in fill-mode-forwards"
                                style={{ animationDelay: `${idx * 100}ms` }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-8 w-full animate-in slide-in-from-bottom-4 fade-in fill-mode-forwards" style={{ animationDelay: '400ms' }}>
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-3 transition-all",
                                    liveVideoId
                                        ? "bg-red-600 text-white shadow-lg shadow-red-900/50 animate-pulse"
                                        : "bg-[var(--accent)] text-white hover:bg-white hover:text-black"
                                )}
                            >
                                {liveVideoId ? "LIVE ON AIR" : "Online Worship"}
                            </a>
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-12 text-gray-500 text-xs tracking-wider">
                        BASED ON THE WORD
                    </div>
                </div>
            )}
        </nav>
    );
}
