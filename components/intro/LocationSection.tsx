"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function LocationSection() {
    const [worshipType, setWorshipType] = useState<"sunday" | "friday">("sunday");

    const locations = {
        sunday: {
            title: "주일 예배",
            address: "18C Horizon Ave, Cameron Park NSW 2285",
            mapSrc: "https://maps.google.com/maps?q=18C%20Horizon%20Ave%2C%20Cameron%20Park%20NSW%202285&t=&z=15&ie=UTF8&iwloc=&output=embed"
        },
        friday: {
            title: "금요 기도회",
            address: "4 Thistle Way, Fletcher NSW 2287",
            mapSrc: "https://maps.google.com/maps?q=4%20Thistle%20Way%2C%20Fletcher%20NSW%202287&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
    };

    const currentLocation = locations[worshipType];

    return (
        <section className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
                <MapPin size={32} className="text-[var(--accent)] mb-4" />
                <h2 className="text-3xl font-bold mb-8">오시는 길</h2>

                {/* Toggle Buttons */}
                <div className="flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-full mb-8">
                    <button
                        onClick={() => setWorshipType("sunday")}
                        className={`px-8 py-2 rounded-full font-medium transition-all ${worshipType === "sunday"
                            ? "bg-white dark:bg-black text-[var(--accent)] shadow-sm"
                            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                            }`}
                    >
                        주일 예배
                    </button>
                    <button
                        onClick={() => setWorshipType("friday")}
                        className={`px-8 py-2 rounded-full font-medium transition-all ${worshipType === "friday"
                            ? "bg-white dark:bg-black text-[var(--accent)] shadow-sm"
                            : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                            }`}
                    >
                        금요 기도회
                    </button>
                </div>

                <p className="text-xl font-medium mb-2">{currentLocation.title}</p>
                <p className="text-gray-500">{currentLocation.address}</p>
            </div>

            {/* Map */}
            <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative group">
                <iframe
                    src={currentLocation.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </section>
    );
}
