import { ImageResponse } from "next/og";

export const alt = "Sumanth Reddy Konannagari — Full-Stack AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#0B1030",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(232,121,249,0.14), transparent 55%), radial-gradient(circle at 90% 100%, rgba(232,121,249,0.1), transparent 55%)",
          color: "#F7F8FC",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#4ADE80",
            }}
          />
          <div style={{ fontSize: 22, color: "#E879F9", letterSpacing: 2 }}>
            AVAILABLE FOR FULL-STACK AND AI OPPORTUNITIES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
            Sumanth Reddy Konannagari
          </div>
          <div style={{ fontSize: 34, color: "#E879F9" }}>Full-Stack AI Engineer</div>
          <div style={{ fontSize: 24, color: "#C9CDE4", maxWidth: 900 }}>
            Scalable APIs · Cloud-native systems · RAG pipelines · Agentic AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(247,248,252,0.2)",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 22, color: "#9BA1C4" }}>
            React · TypeScript · Spring Boot · FastAPI · AWS
          </div>
          <div style={{ fontSize: 22, color: "#E879F9" }}>Ontario, Canada</div>
        </div>
      </div>
    ),
    size
  );
}
