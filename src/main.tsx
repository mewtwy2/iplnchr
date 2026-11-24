
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const socials = {
  Instagram: {
    handle: "@mewtwy2_",
    url: "https://www.instagram.com/mewtwy2_/",
    icon: "◎",
    color: "#E9B3CA",
    bio: "Seu cantinho na internet ♡",
    type: "Instagram"
  },
  TikTok: {
    handle: "@mewtwy2",
    url: "https://www.tiktok.com/@mewtwy2",
    icon: "♪",
    color: "#E8B6CA",
    bio: "Um pouquinho do meu mundo ♡",
    type: "TikTok"
  },
  YouTube: {
    handle: "@mewtwy2",
    url: "https://www.youtube.com/@mewtwy2",
    icon: "▶",
    color: "#E7AFC2",
    bio: "Vídeos e momentos especiais ♡",
    type: "YouTube"
  },
  X: {
    handle: "@mewtwy2_",
    url: "https://x.com/mewtwy2_",
    icon: "𝕏",
    color: "#DDB8C9",
    bio: "Me encontre por aqui ♡",
    type: "X"
  }
};

const apps = [
  { name: "Mensagens", icon: "💬", color: "#F7D9E7" },
  { name: "Fotos", icon: "🌸", color: "#F8E6EF" },
  { name: "Spotify", icon: "🎵", color: "#E9E8DD" },
  { name: "Instagram", icon: "◎", color: "#F5DCE9" },
  { name: "TikTok", icon: "♪", color: "#F1DCE8" },
  { name: "YouTube", icon: "▶", color: "#F7DDE5" },
  { name: "X", icon: "𝕏", color: "#EDE4EA" }
];

function App() {
  const [time, setTime] = useState(new Date());
  const [active, setActive] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const profile = socials[active as keyof typeof socials];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #f9edf2;
          color: #765466;
          font-family: Inter, Arial, sans-serif;
        }
        button { font: inherit; cursor: pointer; }
        .phone {
          width: 100%;
          max-width: 430px;
          min-height: 100vh;
          margin: auto;
          background: linear-gradient(160deg,#fffafd,#fcecf3);
          position: relative;
          overflow: hidden;
        }
        .status {
          height: 48px;
          padding: 16px 26px 5px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 700;
        }
        .home { padding: 22px 25px 110px; }
        .brand {
          text-align: center;
          margin: 12px 0 32px;
        }
        .brand h1 {
          font-size: 30px;
          letter-spacing: -1.5px;
          margin: 0;
          color: #bd7898;
          font-weight: 700;
        }
        .brand p {
          font-size: 13px;
          margin-top: 10px;
          color: #a87c91;
        }
        .app-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 28px 12px;
        }
        .app-button {
          border: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #805d70;
          font-size: 11px;
        }
        .app-icon {
          width: 65px;
          height: 65px;
          border-radius: 21px;
          display: grid;
          place-items: center;
          font-size: 29px;
          box-shadow: 0 5px 13px #c99bb522;
          transition: transform .2s;
        }
        .app-button:active .app-icon { transform: scale(.91); }
        .dock {
          position: absolute;
          bottom: 24px;
          left: 18px;
          right: 18px;
          background: #ffffffa8;
          backdrop-filter: blur(18px);
          border: 1px solid white;
          border-radius: 27px;
          display: flex;
          justify-content: space-around;
          padding: 15px 5px;
        }
        .dock button {
          background: transparent;
          border: 0;
          font-size: 24px;
        }
        .screen { padding: 18px 22px 45px; }
        .back {
          border: 0;
          background: #f8e3ed;
          color: #ad6f8d;
          padding: 9px 15px;
          border-radius: 15px;
          margin-bottom: 20px;
        }
        .screen h2 {
          color: #b87594;
          font-size: 24px;
          margin: 5px 0 22px;
        }
        .message-card {
          background: white;
          padding: 17px;
          border-radius: 22px 22px 22px 5px;
          box-shadow: 0 5px 20px #cba5b322;
          line-height: 1.7;
          font-size: 14px;
        }
        .message-name {
          font-size: 12px;
          color: #c184a1;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
        }
        .photo {
          aspect-ratio: 1;
          border-radius: 18px;
          border: 1px solid white;
          background: linear-gradient(140deg,#f8dce9,#fff5fa);
          display: grid;
          place-items: center;
          font-size: 28px;
          color: #c58aa6;
        }
        .profile-card {
          background: white;
          padding: 20px;
          border-radius: 25px;
          box-shadow: 0 5px 20px #cba5b322;
        }
        .profile-top {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg,#f3ccdf,#fff1f7);
          display: grid;
          place-items: center;
          font-size: 27px;
        }
        .handle { font-size: 14px; font-weight: bold; }
        .bio { font-size: 13px; margin-top: 6px; color: #a17a8d; }
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 5px;
          margin-top: 22px;
        }
        .preview {
          aspect-ratio: 1;
          background: linear-gradient(145deg,#f6dce9,#fff6fa);
          display: grid;
          place-items: center;
          font-size: 19px;
        }
        .visit {
          display: block;
          text-decoration: none;
          text-align: center;
          background: #d99ab7;
          color: white;
          padding: 14px;
          border-radius: 16px;
          margin-top: 22px;
          font-size: 13px;
          font-weight: bold;
        }
        .spotify-card {
          background: #fff;
          padding: 22px;
          border-radius: 24px;
          text-align: center;
        }
        .spotify-cover {
          height: 210px;
          border-radius: 18px;
          background: linear-gradient(145deg,#f2d7e4,#e8dce8);
          display: grid;
          place-items: center;
          font-size: 65px;
        }
        .muted {
          color: #ad8b9c;
          font-size: 12px;
          line-height: 1.7;
        }
        .photo-modal {
          position: fixed;
          inset: 0;
          z-index: 10;
          background: #7b5367dd;
          display: grid;
          place-items: center;
          color: white;
          font-size: 18px;
        }
      `}</style>

      <div className="phone">
        <div className="status">
          <span>{time.toLocaleTimeString("pt-BR", {
            hour: "2-digit", minute: "2-digit"
          })}</span>
          <span>●●●　▰</span>
        </div>

        {!active ? (
          <>
            <main className="home">
              <header className="brand">
                <h1>Mandi's Space</h1>
                <p>Oioi meus amores! Aqui é a Mandi ♡</p>
              </header>

              <div className="app-grid">
                {apps.map((app) => (
                  <button
                    className="app-button"
                    key={app.name}
                    onClick={() => setActive(app.name)}
                  >
                    <span className="app-icon" style={{
                      background: app.color
                    }}>{app.icon}</span>
                    {app.name}
                  </button>
                ))}
              </div>
            </main>

            <nav className="dock">
              {["💬","🌸","🎵","◎"].map((icon, index) => (
                <button key={index} onClick={() =>
                  setActive(["Mensagens","Fotos","Spotify","Instagram"][index])
                }>{icon}</button>
              ))}
            </nav>
          </>
        ) : (
          <main className="screen">
            <button className="back" onClick={() => setActive("")}>
              ‹ Voltar
            </button>

            {active === "Mensagens" && (
              <>
                <h2>Mensagens ♡</h2>
                <div className="message-card">
                  <div className="message-name">Mandi</div>
                  Oioi meus amores! Aqui é a Mandi ♡
                  <br/><br/>
                  Seja muito bem-vindo(a) ao meu cantinho!
                  Criei esse pequeno espaço para compartilhar
                  um pouquinho sobre mim e as coisas que amo.
                  <br/><br/>
                  Aqui você pode conhecer minhas redes sociais,
                  ver algumas das minhas fotos e ouvir minhas
                  músicas favoritas.
                  <br/><br/>
                  Espero que você goste de conhecer meu mundinho.
                  Fique à vontade! ♡
                </div>
              </>
            )}

            {active === "Fotos" && (
              <>
                <h2>Minha galeria 🌸</h2>
                <p className="muted">
                  Alguns momentos especiais. Em breve, suas fotos aqui!
                </p>
                <div className="gallery">
                  {Array.from({length: 6}, (_, i) => (
                    <button className="photo" key={i}
                      onClick={() => setSelectedPhoto(i)}
                    >♡</button>
                  ))}
                </div>
                {selectedPhoto !== null && (
                  <div className="photo-modal"
                    onClick={() => setSelectedPhoto(null)}>
                    <div>Espaço para sua foto ♡<br/><br/>Toque para fechar</div>
                  </div>
                )}
              </>
            )}

            {active === "Spotify" && (
              <>
                <h2>My Music ♡</h2>
                <div className="spotify-card">
                  <div className="spotify-cover">🎵</div>
                  <h3>My favorite songs</h3>
                  <p className="muted">
                    Minha trilha sonora, feita com carinho.
                  </p>
                  <a className="visit" href="https://open.spotify.com/"
                    target="_blank" rel="noreferrer">
                    Abrir Spotify
                  </a>
                  <p className="muted">
                    Depois vamos colocar aqui seu player e sua playlist.
                  </p>
                </div>
              </>
            )}

            {profile && (
              <>
                <h2>{active} ♡</h2>
                <div className="profile-card">
                  <div className="profile-top">
                    <div className="avatar">♡</div>
                    <div>
                      <div className="handle">{profile.handle}</div>
                      <div className="bio">{profile.bio}</div>
                    </div>
                  </div>
                  <div className="preview-grid">
                    {Array.from({length: 9}, (_, i) => (
                      <div className="preview" key={i}>♡</div>
                    ))}
                  </div>
                  <a className="visit" href={profile.url}
                    target="_blank" rel="noreferrer">
                    Visitar perfil oficial ↗
                  </a>
                </div>
                <p className="muted">
                  Prévia ilustrativa do seu perfil. Toque para visitar
                  sua rede social verdadeira.
                </p>
              </>
            )}
          </main>
        )}
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
