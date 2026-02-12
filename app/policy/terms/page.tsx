export default function TermsPage() {
    return (
        <div className="pt-24 min-h-screen bg-black text-white px-6 pb-20">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">이용약관</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
                    <h3 className="text-white text-xl font-semibold mt-8">제 1 조 (목적)</h3>
                    <p>본 약관은 House Of Worship Church (이하 "교회")가 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

                    <h3 className="text-white text-xl font-semibold mt-8">제 2 조 (정의)</h3>
                    <p>"이용자"란 교회 웹사이트에 접속하여 이 약관에 따라 교회가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>

                    <h3 className="text-white text-xl font-semibold mt-8">제 3 조 (약관의 명시와 개정)</h3>
                    <p>교회는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 연락처 등을 이용자가 알 수 있도록 서비스 초기 화면에 게시합니다.</p>

                    <h3 className="text-white text-xl font-semibold mt-8">제 4 조 (서비스의 제공 및 변경)</h3>
                    <p>교회는 다음과 같은 업무를 수행합니다.<br />
                        - 설교 및 예배 정보 제공<br />
                        - 온라인 소그룹 및 커뮤니티 운영<br />
                        - 기타 교회가 정하는 업무
                    </p>

                    <hr className="border-white/10 my-12" />
                    <p className="text-sm">문의: howministry2019@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
