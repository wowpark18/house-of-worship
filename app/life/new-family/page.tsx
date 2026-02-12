import Link from "next/link";
import NewFamilyForm from "@/components/life/NewFamilyForm";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "새가족 등록 | House Of Worship",
    description: "새가족 등록 신청을 환영합니다.",
};

export default function NewFamilyPage() {
    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-black pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/life" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Life 페이지로 돌아가기
                    </Link>
                </div>

                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">새가족 등록 안내</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        환영합니다! 등록 카드를 작성해주시면 담당 교역자가 연락드립니다.
                    </p>
                </div>

                <div className="flex justify-center">
                    <NewFamilyForm />
                </div>
            </div>
        </div>
    );
}
