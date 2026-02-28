import LocationSection from "@/components/intro/LocationSection";
import ServiceTimesSection from "@/components/intro/ServiceTimesSection";

export const metadata = {
    title: "Intro | House Of Worship",
    description: "교회 소개 및 오시는 길",
};

export default function IntroPage() {
    return (
        <div className="pt-32 min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 pb-20">

            {/* Page Header */}
            <header className="mb-16 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Intro</h1>
            </header>

            {/* Hero / Vision */}
            <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight break-keep">
                    <span className="text-[var(--accent)] font-extrabold">House of Worship</span>은 <br />
                    '<span className="relative inline-block text-[var(--accent)] font-extrabold">
                        예배의 집<span className="absolute bottom-1 left-0 w-full h-3 bg-[var(--accent)]/30 -z-10"></span>
                    </span>'이란 뜻으로
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    각 사람들의 마음에 다윗의 장막과 같은 하나님의 임재를 갈망하는 예배의 집이 세워지며, 마지막 때에 주님이 다시 오심을 예비하는 예배자들을 세워지기를 소망하는 교회입니다.
                </p>
            </section>

            {/* About Church */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <div className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-zinc-800">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[var(--accent)]">About Church</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Denomination */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-[var(--accent)] inline-block"></span>
                                소속 교단
                            </h3>
                            <div className="text-gray-600 dark:text-gray-400 space-y-2">
                                <p>[여기에 소속 교단 정보가 들어갑니다]</p>
                                <p className="text-sm opacity-70">예: 대한예수교장로회(합동), 독립교단 등</p>
                            </div>
                        </div>

                        {/* History */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-[var(--accent)] inline-block"></span>
                                연혁
                            </h3>
                            <div className="text-gray-600 dark:text-gray-400 space-y-4">
                                <ul className="space-y-4 relative border-l-2 border-gray-200 dark:border-zinc-700 ml-4">
                                    <li className="pl-6 relative">
                                        <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[7px] top-1.5 outline outline-4 outline-gray-50 dark:outline-zinc-900"></div>
                                        <span className="font-bold text-gray-900 dark:text-gray-100 block mb-1">202X. XX. XX</span>
                                        <span className="text-sm">교회 설립 등 주요 연혁 입력</span>
                                    </li>
                                    <li className="pl-6 relative opacity-70">
                                        <div className="absolute w-3 h-3 bg-gray-300 dark:bg-zinc-600 rounded-full -left-[7px] top-1.5"></div>
                                        <span className="font-bold text-gray-900 dark:text-gray-100 block mb-1">...</span>
                                        <span className="text-sm">추가 내용 입력칸</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Times (Client Component) */}
            <ServiceTimesSection />

            {/* Location (Client Component) */}
            <LocationSection />

        </div>
    );
}
