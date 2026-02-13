"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

const services = [
    {
        id: "sunday",
        name: "주일 예배",
        time: "10:30 AM",
        image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop", // Worship
        alt: "Sunday Worship"
    },
    {
        id: "kids",
        name: "하우 키즈",
        time: "10:30 AM",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2566&auto=format&fit=crop", // Kids playing/learning
        alt: "HOW Kids"
    },
    {
        id: "teens",
        name: "하우 틴즈",
        time: "11:00 AM",
        image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop", // Teens hanging out
        alt: "HOW Teens"
    },
    { // Added missing opening brace for the 'friday' object
        id: "friday",
        name: "금요 예배",
        time: "07:00 PM",
        image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=2670&auto=format&fit=crop", // Evening/Candle light or prayer
        alt: "Friday Worship"
    }
];

export default function ServiceTimesSection() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="bg-gray-50 dark:bg-zinc-900 py-16 mb-24">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm text-[var(--accent)]">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 hover:text-[var(--accent)] transition-colors duration-300 cursor-default">예배 안내</h3>
                            <ul className="space-y-4">
                                {services.map((service) => (
                                    <li
                                        key={service.id}
                                        className={`flex justify-between w-64 border-b pb-2 cursor-pointer transition-all duration-300 ${activeService.id === service.id
                                            ? "border-[var(--accent)] text-[var(--accent)] translate-x-2"
                                            : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-[var(--accent)] dark:hover:text-[var(--accent)]"
                                            }`}
                                        onMouseEnter={() => setActiveService(service)}
                                    >
                                        <span className={`font-medium ${activeService.id === service.id ? "font-bold" : ""}`}>
                                            {service.name}
                                        </span>
                                        <span className="font-medium">
                                            {service.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                    {/* Image with transition */}
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService.id === service.id ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={service.image}
                                alt={service.alt}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white font-bold text-2xl tracking-widest uppercase text-center px-4 drop-shadow-md">
                                    {service.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
