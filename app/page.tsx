export default function HomePage() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden text-red-600 font-[‘Creepster’,sans-serif]">
      {/* Subtle grunge background overlay */}
      <div
        className="absolute inset-0 bg-[url('/scary-grunge.jpg')] bg-cover opacity-20"
        aria-hidden="true"
      />

      {/* Centered cursed welcome */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-6xl md:text-8xl font-black animate-pulse drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]">
          ⛧ DEMONIC GHOST ⛧
        </h1>
        <p className="mt-6 text-xl md:text-3xl uppercase tracking-wide animate-flicker">
          Welcome to the Cursed Realm
        </p>
        <button className="mt-12 px-8 py-3 border-2 border-red-700 rounded-lg text-xl hover:bg-red-700/30 transition">
          Enter at Your Own Risk
        </button>
      </div>

      {/* Flicker keyframes */}
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          10%, 30%, 50%, 70% { opacity: 0.4; }
          20%, 40%, 60%, 80% { opacity: 0.8; }
        }
        .animate-flicker {
          animation: flicker 3s infinite;
        }
      `}</style>
    </main>
  );
}
