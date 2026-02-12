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

                {/* Church Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://house-of-worship-orcin.vercel.app/logo.png"
                    width="200"
                    height="200"
                    alt="Logo"
                    style={{ marginBottom: 40, objectFit: 'contain' }}
                />

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
