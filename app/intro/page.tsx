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
                <span className="text-[var(--accent)] font-medium tracking-widest text-xs uppercase mb-4 block">Our Vision</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight break-keep">
                    House of Worship은 <br />
                    '<span className="relative inline-block">
                        예배의 집<span className="absolute bottom-1 left-0 w-full h-3 bg-[var(--accent)]/30 -z-10"></span>
                    </span>'이란 뜻으로
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto break-keep">
                    각 사람들의 마음에 다윗의 장막과 같은 하나님의 임재를 갈망하는 예배의 집이 세워지며, 마지막 때에 주님이 다시 오심을 예비하는 예배자들을 세워지기를 소망하는 교회입니다.
                </p>
            </section>

            {/* Service Times (Client Component) */}
            <ServiceTimesSection />

            {/* Location (Client Component) */}
            <LocationSection />

        </div>
    );
}
