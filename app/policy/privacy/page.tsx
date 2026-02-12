export default function PrivacyPolicyPage() {
    return (
        <div className="pt-24 min-h-screen bg-black text-white px-6 pb-20">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">개인정보처리방침</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
                    <p>본 방침은 House Of Worship Church 웹사이트 및 서비스 이용과 관련하여 회원의 개인정보를 보호하기 위해 수립되었습니다.</p>

                    <h3 className="text-white text-xl font-semibold mt-8">1. 수집하는 개인정보 항목</h3>
                    <p>이름, 연락처, 이메일 주소 등 서비스 이용에 필요한 최소한의 정보를 수집합니다.</p>

                    <h3 className="text-white text-xl font-semibold mt-8">2. 개인정보의 수집 및 이용목적</h3>
                    <p>수집한 개인정보는 다음의 목적을 위해 활용합니다.<br />
                        - 새가족 등록 및 관리<br />
                        - 온라인 소그룹 참여 안내<br />
                        - 교회 소식 및 공지사항 전달
                    </p>

                    <h3 className="text-white text-xl font-semibold mt-8">3. 개인정보의 보유 및 이용기간</h3>
                    <p>개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>

                    <hr className="border-white/10 my-12" />
                    <p className="text-sm">문의: howministry2019@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
