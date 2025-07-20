"use client";

export default function HomePage() {
  const lore = `At Ravensmoor Estate, every storm‑soaked night the wind carries the ragged 
  lullaby of Isolde Ashworth—the girl who vanished beneath the altar when lightning cleaved the sky. 
  Guests who haunt these halls swear they feel icy fingers tracing their spines, and in moonless mirrors 
  glimpse her hollow eyes begging for release. They say her tears soaked the floorboards red, her whisper 
  now cursed to echo in shattered glass, and any soul who answers her mournful cry is doomed to wander 
  with her, lost between this world and the next.`.trim();

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        color: "#b30000",
        fontFamily: "'Creepster', sans-serif",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Grunge overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images7.alphacoders.com/508/508540.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          height: "100%",
          padding: "2rem",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            margin: 0,
            textShadow: "0 0 12px rgba(255,0,0,0.8)",
            animation: "pulse 2s infinite",
          }}
        >
          ⛧ Askghost.com ⛧
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontStyle: "bold",
            color: "#ffffffff",
            letterSpacing: "0.15em",
            animation: "flicker 3s infinite",
          }}
        >
          Welcome to the Cursed Realm
        </p>
        <button
          style={{
            padding: "0.75rem 2rem",
            border: "2px solid #700000",
            borderRadius: "0.5rem",
            background: "transparent",
            color: "#b30000",
            fontSize: "1.25rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(179,0,0,0.3)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          Enter at Your Own Risk
        </button>

        {/* Scrollable lore container */}
        <div
          style={{
            flex: 1,
            width: "100%",
            maxWidth: "800px",
            padding: "1rem",
            borderRadius: "0.5rem",
            overflowY: "auto",
            textAlign: "left",
            lineHeight: 1.6,
            fontSize: "1.2rem",
            color: "#f0f0f0",
          }}
        >
          {lore.split("\n\n").map((para, i) => (
            <p key={i} style={{ marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes flicker {
          0%,100% { opacity:1; }
          10%,30%,50%,70% { opacity:0.4; }
          20%,40%,60%,80% { opacity:0.8; }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </main>
  );
}
