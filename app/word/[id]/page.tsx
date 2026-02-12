import { getSermonById, getRelatedSermons } from "@/lib/data/mock-sermons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Share2, Youtube } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const sermon = await getSermonById(id);
    if (!sermon) return { title: "House Of Worship" };
    return {
        title: `${sermon.title} - ${sermon.preacher}`,
        description: sermon.description,
    };
}

export default async function SermonDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const sermon = await getSermonById(id);

    if (!sermon) {
        notFound();
    }

    const relatedSermons = await getRelatedSermons(sermon.id);

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-zinc-950 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Back Button */}
                <Link href="/word" className="inline-flex items-center text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} className="mr-2" /> 모든 설교 목록으로
                </Link>

                {/* Sermon Title Area */}
                <div className="mb-6 space-y-2">
                    <span className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase">
                        {sermon.series} Series
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                        {sermon.title}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm gap-4 pt-2">
                        <span>{sermon.date}</span>
                        <span>•</span>
                        <span>{sermon.preacher}</span>
                        <span>•</span>
                        <span>{sermon.scripture}</span>
                    </div>
                </div>

                {/* Video Player (Clean) */}
                <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl mb-12 relative group">
                    <iframe
                        src={`https://www.youtube.com/embed/${sermon.videoUrl}?modestbranding=1&rel=0&color=white`}
                        title={sermon.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Action Bar */}
                {/* Action Bar */}
                <div className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-800 pb-12 mb-12 gap-6">
                    <div className="flex gap-4 shrink-0">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-900 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors whitespace-nowrap">
                            <Share2 size={16} /> 공유하기
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 rounded-full text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors whitespace-nowrap">
                            <Youtube size={16} /> 유튜브에서 보기
                        </button>
                    </div>

                    {/* Tags */}
                    <div className="hidden md:flex flex-wrap justify-end gap-2">
                        {sermon.tags.map(tag => (
                            <span key={tag} className="text-xs text-gray-400 whitespace-nowrap bg-gray-50 dark:bg-zinc-900 px-2 py-1 rounded">#{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Related Sermons */}
                <section>
                    <h3 className="text-xl font-bold mb-6">함께 들으면 좋은 말씀 (AI 추천)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedSermons.map((rel) => (
                            <Link href={`/word/${rel.id}`} key={rel.id} className="group">
                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <img src={rel.thumbnail} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h4 className="font-bold text-sm line-clamp-1 group-hover:text-[var(--accent)]">{rel.title}</h4>
                                <p className="text-xs text-gray-500">{rel.date}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
