import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        {/* Simplified Background Gradient simulating video overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-[url('/main-bg.png')] bg-cover bg-center bg-fixed opacity-60 z-0"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-gray-300">
            2026 House Of Worship
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            Return to <br />
            <span className="text-[var(--accent)]">Basic</span>.
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            본질로의 회귀. 말씀과 공동체에 집중하는 곳.
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/word" className="px-8 py-3 bg-[var(--accent)] text-white rounded-full font-medium hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
              <Play size={18} fill="currentColor" /> 주일설교 듣기
            </Link>
            <Link href="/life" className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all">
              새가족 등록
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* Daily Verse Section */}
      <section className="py-32 bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold tracking-wider uppercase">
            Daily Verse
          </span>
          <blockquote className="text-3xl md:text-5xl font-serif font-medium leading-relaxed text-gray-900">
            "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라"
          </blockquote>
          <cite className="block text-xl text-gray-500 not-italic font-light">
            요한복음 1:1
          </cite>

          <div className="pt-8">
            <Link href="/word/devotionals" className="inline-flex items-center text-[var(--accent)] font-medium hover:underline underline-offset-4">
              매일묵상 전체보기 <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Connectivity / Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: AI Search */}
            <Link href="/word/search" className="bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group block">
              <div className="h-12 w-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--accent)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI 설교 검색</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                "위로가 필요한 날"이라고 물어보세요. 상황에 맞는 말씀을 찾아드립니다.
              </p>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent)] transition-colors flex items-center">
                검색해보기 <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>

            {/* Card 2: Clean Player */}
            <Link href="/word" className="bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group block">
              <div className="h-12 w-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--accent)]">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">미니멀 플레이어</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                광고 없이 말씀에만 집중하세요. 백그라운드 재생도 지원합니다.
              </p>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent)] transition-colors flex items-center">
                설교 듣기 <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>

            {/* Card 3: Community */}
            <Link href="/life" className="bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group block">
              <div className="h-12 w-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--accent)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">온라인 공동체</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                어디서나 연결되는 소그룹. 카카오 싱크로 간편하게 참여하세요.
              </p>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-[var(--accent)] transition-colors flex items-center">
                참여하기 <ArrowRight size={14} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <div className="flex items-end mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="House Of Worship Logo"
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="w-[1px] h-4 bg-white/30 ml-2 mr-3 mb-2"></div>
              <h4 className="text-base font-bold tracking-tight mb-1.5">HOUSE OF WORSHIP CHURCH</h4>
            </div>
            <p className="text-gray-400 text-sm">
              18C Horizon Ave, Cameron Park NSW 2285<br />
              Email: howministry2019@gmail.com
            </p>
          </div>
          <div className="text-gray-400 text-sm flex gap-6">
            <Link href="/policy/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/policy/terms" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="/intro/location" className="hover:text-white transition-colors">오시는 길</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
