import LocationSection from "@/components/intro/LocationSection";
import ServiceTimesSection from "@/components/intro/ServiceTimesSection";

export const metadata = {
    title: "Intro | House Of Worship",
    description: "교회 소개 및 오시는 길",
};

export default function IntroPage() {
    return (
        <div className="pt-32 min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 pb-20">

            {/* Hero / Vision */}
            <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
                <span className="text-[var(--accent)] font-medium tracking-widest text-xs uppercase mb-4 block">Our Vision</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    교회의 본질은<br className="md:hidden" /> 건물이 아니라 <br />
                    <span className="relative inline-block">
                        사람<span className="absolute bottom-1 left-0 w-full h-3 bg-[var(--accent)]/30 -z-10"></span>
                    </span>입니다.
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    House Of Worship은 화려한 시스템보다 한 사람의 예배자를 세우는 일에 집중합니다.
                    우리는 다시 기본으로 돌아가(Return to Basic), 말씀과 삶이 일치하는 공동체를 꿈꿉니다.
                </p>
            </section>

            {/* Service Times (Client Component) */}
            <ServiceTimesSection />

            {/* Location (Client Component) */}
            <LocationSection />

        </div>
    );
}
