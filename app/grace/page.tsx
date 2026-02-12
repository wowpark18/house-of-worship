// This will include the import and component usage
import PrayerRequestForm from "@/components/grace/PrayerRequestForm";

export const metadata = {
    title: "Grace | House Of Worship",
    description: "기도 요청 및 온라인 헌금",
};

export default function GracePage() {
    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-black px-6 pb-20">
            <div className="max-w-7xl mx-auto">

                <header className="mb-16 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif italic font-bold tracking-tight">Grace Only</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        은혜 아니면 살아갈 수가 없네.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Prayer Request Form (Stylized) */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold border-b border-black pb-4 dark:border-white">기도 요청 (Secret)</h2>
                        <p className="text-gray-500 text-sm">
                            나누지 못한 아픔이 있나요? 목회자만 볼 수 있도록 비밀이 100% 보장됩니다.
                        </p>

                        <PrayerRequestForm />
                    </div>

                    {/* Offering & Donation */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold border-b border-black pb-4 dark:border-white">온라인 헌금</h2>
                        <p className="text-gray-500 text-sm">
                            마음을 드리는 것이 물질을 드리는 것보다 우선입니다.
                        </p>

                        <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl space-y-6">
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <span className="font-bold text-lg block mb-1">십일조 / 감사 / 선교 / 구제</span>
                                <div className="text-gray-600 dark:text-gray-400 font-mono text-sm space-y-1">
                                    <p>House Of Worship Ministry</p>
                                    <p>BSB <span className="text-black dark:text-white font-bold">062 827</span></p>
                                    <p>ACC <span className="text-black dark:text-white font-bold">1035 3626</span></p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
