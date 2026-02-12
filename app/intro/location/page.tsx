export default function LocationPage() {
    return (
        <div className="pt-32 min-h-screen bg-black text-white px-6 pb-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">오시는 길</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Address Info */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-[var(--accent)]">주소 안내</h2>
                        <address className="not-italic text-lg text-gray-400 space-y-2">
                            <p>House Of Worship Church</p>
                            <p>18C Horizon Ave,</p>
                            <p>Cameron Park NSW 2285</p>
                        </address>

                        <div className="pt-8 space-y-4">
                            <h3 className="text-xl font-semibold">이메일 문의</h3>
                            <a href="mailto:howministry2019@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                howministry2019@gmail.com
                            </a>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=18C+Horizon+Ave,+Cameron+Park+NSW+2285"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all"
                            >
                                Google Maps 바로가기
                            </a>
                        </div>
                    </div>

                    {/* Map Embed (Placeholder for now) */}
                    <div className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-600">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8361661138865!2d151.60539157648315!3d-32.90656097360982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7337a7cdde792b%3A0x6b9bf227221d8b2d!2s18C%20Horizon%20Ave%2C%20Cameron%20Park%20NSW%202285%2C%20Australia!5e0!3m2!1sen!2skr!4v1707832000000!5m2!1sen!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '1rem' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
