import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 512,
    height: 512,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'black',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    {/* Using the deployed logo URL as per existing patterns */}
                    {/* Adjust size to fit comfortably inside the circle */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://house-of-worship-orcin.vercel.app/logo.png"
                        alt="HOW Logo"
                        width="320"
                        height="320"
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
