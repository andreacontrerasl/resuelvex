import { ImageResponse } from "next/og";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — Constituye tu empresa en Venezuela, sin complicarte.`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1F305E",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#00BFB3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "#1F305E",
            }}
          >
            R
          </div>
          <div style={{ fontSize: 36, fontWeight: 800 }}>{SITE_NAME}</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Constituye tu empresa en Venezuela, sin complicarte.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 32,
            color: "#c8f5ef",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          {DEFAULT_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
