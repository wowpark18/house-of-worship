import Link from "next/link";

export const metadata = {
    title: "Life | House Of Worship",
    description: "공동체, 그 이상의 연결",
};

export default function LifePage() {
    const groups = [
        { title: "셀별 모임", time: "주일예배후 11:30 AM", location: "주일예배 장소", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" },
        { title: "성경공부반", time: "주일 3:00 PM", location: "사택", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" },
        { title: "청년부 모임", time: "2, 4째주 주일 5:00 PM", location: "사택", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop" },
        { title: "중보기도모임", time: "주일 예배전 10:15 AM", location: "야외 테라스", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2670&auto=format&fit=crop" },
    ];

    return (
        <div className="pt-32 min-h-screen bg-gray-50 dark:bg-black pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <header className="mb-16 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Life Together</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        "두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라" (마 18:20)<br />
                        함께 울고 함께 웃는, 진짜 가족이 되어주세요.
                    </p>
                    <div className="pt-6">
                        <Link href="/life/new-family">
                            <button className="px-8 py-3 bg-[var(--accent)] text-white rounded-full font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                새가족 등록 신청
                            </button>
                        </Link>
                    </div>
                </header>

                {/* Small Groups Grid */}
                <h2 className="text-2xl font-bold mb-8 pl-2 border-l-4 border-[var(--accent)]">
                    Current Small Groups
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {groups.map((group, idx) => (
                        <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer relative">
                            <div className="h-48 overflow-hidden">
                                <img src={group.image} alt={group.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{group.title}</h3>
                                <p className="text-sm text-gray-500 flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    {group.time}
                                </p>
                                <p className="text-sm text-gray-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    {group.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Community Guidelines */}
                <div className="mt-24 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800">
                    <h3 className="text-xl font-bold mb-4">공동체 3대 원칙</h3>
                    <ol className="space-y-4 text-gray-600 dark:text-gray-300 list-decimal list-inside">
                        <li><strong className="text-black dark:text-white">비밀 보장:</strong> 나눔의 내용은 모임 안에서만 머뭅니다.</li>
                        <li><strong className="text-black dark:text-white">경청:</strong> 판단하지 않고 있는 그대로 들어줍니다.</li>
                        <li><strong className="text-black dark:text-white">참여:</strong> 구경꾼이 아니라 참여자가 되어주세요.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
