import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'House Of Worship Church'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Decorative circle/glow */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                    }}
                />

                {/* Logo/Icon placeholder using SVG path directly to avoid external fetch dependency */}
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{ marginBottom: 40 }}
                >
                    <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
                </svg>

                <div style={{ fontSize: 80, fontWeight: 'bold', letterSpacing: '-0.02em', textAlign: 'center' }}>
                    HOUSE OF WORSHIP
                </div>
                <div style={{ fontSize: 32, marginTop: 24, opacity: 0.7 }}>
                    CHURCH
                </div>
                <div style={{ fontSize: 24, marginTop: 40, opacity: 0.5 }}>
                    하나님의 말씀은 살아 있고 활력이 있어 (히 4:12)
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
