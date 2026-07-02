import { ImageResponse } from "next/og";

export const alt = "Aegis Interlink — Cybersecurity, IT Infrastructure & Managed Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.16), transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="84" height="84" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 L21 6 V12 C21 17 17 20.5 12 22 C7 20.5 3 17 3 12 V6 Z"
              fill="#22c55e"
            />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{ color: "white", fontSize: 64, fontWeight: 900, letterSpacing: 1 }}>
              AEGIS
            </span>
            <span style={{ width: 2, height: 34, background: "#16a34a", opacity: 0.7 }} />
            <span style={{ color: "#4ade80", fontSize: 64, fontWeight: 800, letterSpacing: 4 }}>
              INTERLINK
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            color: "#a1a1aa",
            fontSize: 28,
            fontWeight: 500,
          }}
        >
          Cybersecurity · IT Infrastructure · Managed Services
        </div>
      </div>
    ),
    { ...size }
  );
}
