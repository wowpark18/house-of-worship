"use client";

import { useState } from "react";

export default function NewFamilyForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 1. 구글 폼에서 '미리 채워진 링크 가져오기'를 통해 각 항목의 entry ID를 알아내세요.
    // 2. 구글 폼의 <form action="..."> URL을 가져오세요.
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc2dAvVyGpOfMr0wU79LwQGihppv3ZhFpU0gpvJtnr-MJH8pQ/formResponse";

    // 추출된 Entry ID 매핑
    const ENTRY_IDS = {
        name: "entry.277551511",    // 이름
        dob: "entry.768557767",     // 생년월일
        phone: "entry.911434189",   // 연락처
        address: "entry.1949198167",// 주소
        family: "entry.1966229942"  // 가족 사항
    };

    const HANDLE_SUBMIT_DELAY = 2000;

    const handleFormSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setSubmitted(true);
            setIsSubmitting(false);
        }, HANDLE_SUBMIT_DELAY);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 p-10 rounded-2xl text-center space-y-6 border border-green-100 dark:border-green-800 animate-fade-in">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-100 dark:bg-green-800 rounded-full text-green-600 dark:text-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">환영합니다! 등록이 접수되었습니다.</h3>
                <p className="text-green-600 dark:text-green-400 text-lg leading-relaxed">
                    House Of Worship의 가족이 되신 것을 진심으로 축복합니다.<br />
                    담당 목회자가 확인 후 곧 연락드리겠습니다.
                </p>
                <div className="pt-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                    >
                        메인으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-2 text-center">새가족 등록 카드</h2>
            <p className="text-gray-500 text-center mb-10">
                아래 내용을 작성해 주시면 교회 생활을 성심껏 돕겠습니다.
            </p>

            <iframe name="hidden_iframe_new_family" id="hidden_iframe_new_family" style={{ display: "none" }}></iframe>
            <form
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe_new_family"
                onSubmit={handleFormSubmit}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">이름 (성명)</label>
                        <input
                            name={ENTRY_IDS.name}
                            required
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-[var(--accent)] focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 transition-all"
                            placeholder="홍길동"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">생년월일</label>
                        <input
                            name={ENTRY_IDS.dob}
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-[var(--accent)] focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 transition-all"
                            placeholder="YYYY-MM-DD"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">연락처 (Mobile)</label>
                    <input
                        name={ENTRY_IDS.phone}
                        required
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-[var(--accent)] focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 transition-all"
                        placeholder="0400 000 000"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">주소 (Address)</label>
                    <input
                        name={ENTRY_IDS.address}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-[var(--accent)] focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 transition-all"
                        placeholder="Street Address, Suburb NSW Postcode"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">가족 사항 (배우자/자녀)</label>
                    <textarea
                        name={ENTRY_IDS.family}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-[var(--accent)] focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 transition-all h-24 resize-none"
                        placeholder="함께 등록하시는 가족이 있다면 적어주세요."
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[var(--accent)] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-[var(--accent)]/30 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-wait"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                전송 중...
                            </>
                        ) : (
                            "등록 신청하기"
                        )}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        * 제출하신 정보는 새가족 등록 및 목회적 돌봄 목적으로만 사용됩니다.
                    </p>
                </div>
            </form>
        </div>
    );
}
