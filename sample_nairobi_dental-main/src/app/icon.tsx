import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0066cc',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        ✨
      </div>
    ),
    {
      width: 32,
      height: 32,
    },
  );
}
