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
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-black/90" : "bg-transparent text-white mix-blend-difference"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-inherit">
                {/* Logo */}
                <Link href="/" className="flex items-end gap-0 text-2xl font-bold tracking-tighter group pb-1">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-105 -mb-2">
                        <Image
                            src="/logo.png"
                            alt="House Of Worship Logo"
                            width={80}
                            height={80}
                            className="object-contain w-full h-full"
                            unoptimized
                        />
                    </div>
                    <div className="w-[1px] h-5 bg-current/30 mx-2 mb-2"></div>
                    <span>HOUSE OF WORSHIP CHURCH</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-[var(--accent)] transition-colors"
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-inherit"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black p-6 flex flex-col items-center justify-center space-y-8 z-40 transition-opacity duration-300">
                    <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
                        <X size={32} />
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-bold hover:text-[var(--accent)]"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "px-8 py-3 rounded-full text-lg font-medium mt-4 flex items-center justify-center gap-2",
                            liveVideoId ? "bg-red-600 text-white animate-pulse" : "bg-[var(--accent)] text-white"
                        )}
                    >
                        {liveVideoId ? (
                            <>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                                LIVE ON AIR
                            </>
                        ) : (
                            "Online Worship"
                        )}
                    </a>
                </div>
            )}
        </nav>
    );
}
