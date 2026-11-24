
import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [openApp, setOpenApp] = useState("");
  const [note, setNote] = useState("");
  const [wallpaper, setWallpaper] = useState("from-pink-200 via-pink-100 to-rose-200");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { name: "Fotos", emoji: "🌷", color: "bg-pink-300" },
    { name: "Notas", emoji: "📝", color: "bg-yellow-200" },
    { name: "Música", emoji: "🎧", color: "bg-purple-200" },
    { name: "Calendário", emoji: "📅", color: "bg-red-200" },
    { name: "Mensagens", emoji: "💌", color: "bg-pink-200" },
    { name: "Safari", emoji: "🧭", color: "bg-blue-200" },
    { name: "Calculadora", emoji: "🧮", color: "bg-gray-200" },
    { name: "Ajustes", emoji: "⚙️", color: "bg-gray-300" },
  ];

  const clock = time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = time.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const renderApp = () => {
    switch (openApp) {
      case "Fotos":
        return (
          <div className="grid grid-cols-2 gap-3">
            {["🌸", "🎀", "🧸", "🩷", "🌷", "✨"].map((item, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-pink-100 flex items-center justify-center text-5xl">
                {item}
              </div>
            ))}
            <p className="col-span-2 text-center text-pink-400 text-sm">
              Seu cantinho de memórias ♡
            </p>
          </div>
        );

      case "Notas":
        return (
          <div>
            <p className="text-pink-500 mb-3">Minhas anotações ♡</p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Escreva suas ideias aqui..."
              className="w-full h-64 rounded-2xl bg-pink-50 p-4 outline-none resize-none text-gray-700"
            />
          </div>
        );

      case "Música":
        return (
          <div className="text-center py-10">
            <div className="text-8xl mb-6">🎧</div>
            <h2 className="text-xl font-bold text-pink-600">My Playlist</h2>
            <p className="text-gray-500 mt-2">Sua trilha sonora favorita ♡</p>
            <div className="mt-8 p-4 rounded-2xl bg-pink-100">
              🎵 Adicione suas músicas favoritas!
            </div>
          </div>
        );

      case "Calendário":
        return (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-pink-600">
              {time.getDate()}
            </h2>
            <p className="capitalize text-gray-500">{date}</p>
            <p className="mt-8 text-pink-400">Organize seus dias ♡</p>
          </div>
        );

      case "Mensagens":
        return (
          <div className="space-y-4">
            <div className="bg-pink-100 p-4 rounded-2xl rounded-bl-none">
              Oii! Bem-vinda ao seu celular virtual! 💗
            </div>
            <div className="bg-purple-100 p-4 rounded-2xl rounded-br-none ml-8">
              Que felicidade estar aqui! 🎀
            </div>
            <p className="text-center text-gray-400 text-sm">
              Suas conversas começam aqui ♡
            </p>
          </div>
        );

      case "Safari":
        return (
          <div className="text-center py-8">
            <div className="text-7xl mb-5">🧭</div>
            <h2 className="text-xl font-bold text-pink-600">Safari</h2>
            <p className="text-gray-500 mt-3">
              Seu navegador virtual.
            </p>
            <input
              placeholder="Pesquisar..."
              className="w-full mt-6 p-4 rounded-full bg-pink-50 outline-none"
            />
          </div>
        );

      case "Calculadora":
        return (
          <div className="text-center py-6">
            <div className="text-7xl mb-5">🧮</div>
            <p className="text-gray-500">
              Sua calculadora virtual ♡
            </p>
            <a
              href="https://www.google.com/search?q=calculadora"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-pink-400 text-white rounded-full px-6 py-3"
            >
              Abrir calculadora
            </a>
          </div>
        );

      case "Ajustes":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-pink-100 rounded-2xl">
              <p className="font-bold text-pink-600">Aparência</p>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-3 w-full text-left"
              >
                {darkMode ? "🌙 Modo escuro: ligado" : "☀️ Modo claro: ligado"}
              </button>
            </div>
            <div className="p-4 bg-pink-100 rounded-2xl">
              <p className="font-bold text-pink-600">Papel de parede</p>
              <div className="flex gap-3 mt-3">
                <button onClick={() => setWallpaper("from-pink-200 via-pink-100 to-rose-200")} className="text-3xl">🩷</button>
                <button onClick={() => setWallpaper("from-purple-200 via-pink-100 to-purple-100")} className="text-3xl">💜</button>
                <button onClick={() => setWallpaper("from-rose-100 via-white to-pink-200")} className="text-3xl">🤍</button>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm">My Pink Phone · 1.0</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-3">
      <div className="w-full max-w-[390px] h-[780px] max-h-[95vh] rounded-[48px] bg-black p-[9px] shadow-2xl">
        <div className={`relative w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-br ${wallpaper} ${darkMode ? "brightness-75" : ""}`}>
          
          <div className="flex justify-between items-center px-7 pt-5 text-gray-800 text-sm font-bold">
            <span>{clock}</span>
            <span>● ᯤ ▰</span>
          </div>

          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />

          {openApp === "" ? (
            <div className="px-6 pt-12">
              <div className="text-center mb-10">
                <p className="text-gray-600 capitalize text-sm">{date}</p>
                <h1 className="text-6xl font-light text-gray-800 mt-2">{clock}</h1>
                <p className="text-pink-600 mt-3 font-medium">
                  Bem-vinda ao seu mundo ♡
                </p>
              </div>

              <div className="grid grid-cols-4 gap-x-3 gap-y-8">
                {apps.map((app) => (
                  <button
                    key={app.name}
                    onClick={() => setOpenApp(app.name)}
                    className="flex flex-col items-center gap-2 active:scale-90 transition"
                  >
                    <div className={`${app.color} w-14 h-14 rounded-[19px] flex items-center justify-center text-3xl shadow-md`}>
                      {app.emoji}
                    </div>
                    <span className="text-[10px] text-gray-700 font-medium">
                      {app.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="absolute bottom-16 left-5 right-5 rounded-[28px] bg-white/50 backdrop-blur-md p-4 flex justify-around text-3xl shadow-lg">
                <button onClick={() => setOpenApp("Mensagens")}>💬</button>
                <button onClick={() => setOpenApp("Safari")}>🧭</button>
                <button onClick={() => setOpenApp("Fotos")}>🌸</button>
                <button onClick={() => setOpenApp("Música")}>🎵</button>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 top-12 bg-white rounded-t-[32px] p-5">
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={() => setOpenApp("")}
                  className="text-pink-500 text-2xl"
                >
                  ‹
                </button>
                <h2 className="text-xl font-bold text-pink-600">{openApp}</h2>
              </div>
              {renderApp()}
            </div>
          )}

          <button
            onClick={() => setOpenApp("")}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
