import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF4500',
          fontWeight: 900,
          fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          borderRadius: '20%'
        }}
      >
        S1
      </div>
    ),
    {
      ...size,
    }
  );
}
