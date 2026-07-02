import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z"
            fill="#22c55e"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
