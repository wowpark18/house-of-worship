"use client";

import { useState } from "react";

export default function PrayerRequestForm() {
    const [submitted, setSubmitted] = useState(false);

    // 1. 구글 폼에서 '미리 채워진 링크 가져오기'를 통해 각 항목의 entry ID를 알아내세요.
    // 2. 구글 폼의 <form action="..."> URL을 가져오세요.
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdt8rB9zR2w9p3SRxcJYADmkgxq1jkLz-1x48m0lunLH-Z7ww/formResponse";
    const ENTRY_IDS = {
        name: "entry.2094387580",    // 이름 필드 ID
        contact: "entry.1995516091", // 연락처 필드 ID
        content: "entry.1983678150"  // 기도제목 필드 ID
    };

    const handleFormSubmit = () => {
        // 폼이 실제로 전송될 시간을 주기 위해 지연시킵니다.
        // 바로 상태를 바꾸면 폼이 사라져서 전송이 취소될 수 있습니다.
        setTimeout(() => {
            setSubmitted(true);
        }, 2000);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl text-center space-y-4 border border-green-100 dark:border-green-800">
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full text-green-600 dark:text-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200">기도제목이 전달되었습니다</h3>
                <p className="text-green-600 dark:text-green-400">
                    보내주신 귀한 마음, 목회자가 확인 후 함께 기도하겠습니다.<br />
                    비밀은 100% 보장됩니다.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-green-700 underline decoration-green-700/50 hover:decoration-green-700"
                >
                    추가로 더 보내기
                </button>
            </div>
        );
    }

    return (
        <>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
            <form
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleFormSubmit}
                className="space-y-6"
            >
                <div>
                    <label className="block text-sm font-medium mb-1">이름 (익명 가능)</label>
                    <input
                        name={ENTRY_IDS.name}
                        type="text"
                        className="w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-[var(--accent)] transition-colors"
                        placeholder="홍길동 Or 익명"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">연락처 (선택)</label>
                    <input
                        name={ENTRY_IDS.contact}
                        type="tel"
                        className="w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 focus:outline-none focus:border-[var(--accent)] transition-colors"
                        placeholder="0400 000 000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">기도 제목</label>
                    <textarea
                        name={ENTRY_IDS.content}
                        required
                        className="w-full border border-gray-300 dark:border-gray-700 bg-transparent p-4 h-40 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                        placeholder="어려워하지 마시고 마음을 나눠주세요."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[var(--accent)] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2"
                >
                    기도 부탁하기
                </button>
                <p className="text-xs text-center text-gray-400">
                    * 전송된 내용은 구글 설문지에 안전하게 저장됩니다.
                </p>
            </form>
        </>
    );
}
