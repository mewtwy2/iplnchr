  
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BatteryFull,
  Wifi,
  Signal,
  Home,
  Heart,
  MessageCircle,
  Repeat2,
  Share2,
  ShoppingBag,
  NotebookPen,
  Music2,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";
import "./style.css";

const CONFIG = {
  name: "Mandi",
  instagram: {
    username: "mewtwy2_",
    bio: "K-pop collector ♡",
    followers: "—",
    following: "—",
    url: "https://instagram.com/mewtwy2_",
  },
  tiktok: {
    username: "mewtwy2",
    bio: "K-pop, colecionáveis e muito mais ♡",
    followers: "17,6 mil",
    likes: "294 mil",
    url: "https://www.tiktok.com/@mewtwy2",
  },
  youtube: {
    name: "Mandi",
    username: "@mewtwy2",
    bio: "Vídeos de K-pop, coleções e unboxings ♡",
    subscribers: "—",
    url: "https://www.youtube.com/@mewtwy2",
  },
  x: {
    username: "Mewtwy2",
    bio: "K-pop collector ♡",
    posts: [
      "Ja compraram na chimmo store hoje?",
      "novidades chegando!👀",
      "oioi meus amores! Video novo hoje a tarde!",
      "kit bts ja disponível no nosso site!",
    ],
  },
  spotify: {
    title: "Minha playlist",
    description: "Uma seleção de músicas favoritas ♡",
    url: "",
  },
  store: {
    name: "Chimmo Store",
    description: "Photocards fanmade de K-pop ♡",
    url: "https://chimostore.lojavirtualnuvem.com.br",
  },
  notes: {
    title: "NÃO ESQUECER",
    content: [
      "Assistir ao vídeo novo da Mandi.",
      "Conferir as novidades da Chimmo Store.",
      "Acompanhar as atualizações.",
      "Verificar novos lançamentos.",
    ],
  },
  whatsapp: {
    name: "Nosso cantinho ♡",
    description: "Fique por dentro das novidades!",
    url: "",
    messages: [
      "Bem-vindos ao nosso cantinho! ♡",
      "Por aqui vocês ficam por dentro das novidades!",
      "Não esqueçam de acompanhar as atualizações.",
    ],
  },
};

const APPS = [
  {
    id: "instagram",
    name: "Instagram",
    logo: "https://cdn.simpleicons.org/instagram/E4405F",
  },
  {
    id: "tiktok",
    name: "TikTok",
    logo: "https://cdn.simpleicons.org/tiktok/000000",
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "https://cdn.simpleicons.org/youtube/FF0033",
  },
  {
    id: "x",
    name: "X",
    logo: "https://cdn.simpleicons.org/x/000000",
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "https://cdn.simpleicons.org/spotify/1DB954",
  },
  {
    id: "store",
    name: "Loja",
    logo: "",
  },
  {
    id: "notes",
    name: "Notas",
    logo: "",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    logo: "https://cdn.simpleicons.org/whatsapp/25D366",
  },
] as const;

type AppId = (typeof APPS)[number]["id"];

function AppIcon({
  id,
  dock = false,
}: {
  id: AppId;
  dock?: boolean;
}) {
  const app = APPS.find((item) => item.id === id);

  if (!app) return null;

  return (
    <span className={`app-art app-art-${id} ${dock ? "dock-art" : ""}`}>
      {app.logo ? (
        <img src={app.logo} alt="" />
      ) : id === "store" ? (
        <ShoppingBag />
      ) : (
        <NotebookPen />
      )}
    </span>
  );
}

export default function App() {
  const [openedApp, setOpenedApp] = useState<AppId | null>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 10000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedApp(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openApp = (id: AppId) => setOpenedApp(id);
  const closeApp = () => setOpenedApp(null);

  const dockApps: AppId[] = [
    "instagram",
    "notes",
    "store",
    "whatsapp",
  ];

  const externalButton = (url: string, label: string) => (
    <a
      className={`external-button ${url ? "" : "disabled-button"}`}
      href={url || undefined}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        if (!url) event.preventDefault();
      }}
    >
      {label}
      <ExternalLink size={16} />
    </a>
  );

  return (
    <main className="pink-world">
      <div className="page-decoration decoration-one" />
      <div className="page-decoration decoration-two" />

      <div className="phone-stage">
        <div className="iphone-device" aria-label="My Pink Phone">
          <div className="iphone-screen">

            <header className="status-bar">
              <span className="status-time">{time}</span>

              <div className="dynamic-island">
                <span />
              </div>

              <div className="status-indicators">
                <Signal size={15} />
                <Wifi size={15} />
                <BatteryFull size={19} />
              </div>
            </header>

            <AnimatePresence mode="wait">
              {!openedApp ? (
                <motion.div
                  key="home"
                  className="home-screen"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="home-heading">
                    <span className="welcome-date">YOUR DIGITAL WORLD</span>
                    <h1>Hello, Mandi!</h1>
                    <p>um cantinho feito com carinho ♡</p>
                  </div>

                  <div className="app-grid">
                    {APPS.map((app) => (
                      <button
                        className="app-button"
                        key={app.id}
                        onClick={() => openApp(app.id)}
                        aria-label={`Abrir ${app.name}`}
                      >
                        <AppIcon id={app.id} />
                        <span>{app.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="home-bottom">
                    <span>♡ made with love ♡</span>
                  </div>

                  <nav className="dock" aria-label="Aplicativos favoritos">
                    {dockApps.map((id) => (
                      <button
                        key={id}
                        onClick={() => openApp(id)}
                        aria-label={`Abrir ${APPS.find((a) => a.id === id)?.name}`}
                      >
                        <AppIcon id={id} dock />
                      </button>
                    ))}
                  </nav>
                </motion.div>
              ) : (
                <motion.div
                  key={openedApp}
                  className={`app-screen screen-${openedApp}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="app-navigation">
                    <button onClick={closeApp} aria-label="Voltar ao início">
                      <ArrowLeft size={21} />
                      <span>Início</span>
                    </button>

                    <span className="navigation-title">
                      {APPS.find((a) => a.id === openedApp)?.name}
                    </span>

                    <button onClick={closeApp} aria-label="Fechar aplicativo">
                      <Home size={19} />
                    </button>
                  </div>

                  <div className="app-content">
                    {openedApp === "instagram" && (
                      <section className="profile-page instagram-page">
                        <AppIcon id="instagram" />
                        <h2>Instagram</h2>
                        <div className="profile-avatar">M</div>
                        <h3>{CONFIG.instagram.username}</h3>
                        <p>{CONFIG.instagram.bio}</p>
                        <div className="profile-stats">
                          <span><b>—</b> publicações</span>
                          <span><b>{CONFIG.instagram.followers}</b> seguidores</span>
                          <span><b>{CONFIG.instagram.following}</b> seguindo</span>
                        </div>
                        {externalButton(CONFIG.instagram.url, "VISITAR PERFIL NO INSTAGRAM")}
                        <p className="privacy-note">Conheça meu perfil oficial ♡</p>
                      </section>
                    )}

                    {openedApp === "tiktok" && (
                      <section className="profile-page tiktok-page">
                        <AppIcon id="tiktok" />
                        <h2>TikTok</h2>
                        <div className="profile-avatar">M</div>
                        <h3>{CONFIG.tiktok.username}</h3>
                        <p>{CONFIG.tiktok.bio}</p>
                        <div className="profile-stats">
                          <span><b>{CONFIG.tiktok.followers}</b> seguidores</span>
                          <span><b>{CONFIG.tiktok.likes}</b> curtidas</span>
                        </div>
                        {externalButton(CONFIG.tiktok.url, "ACESSAR MEU TIKTOK")}
                        <p className="privacy-note">Me encontre na plataforma oficial ♡</p>
                      </section>
                    )}

                    {openedApp === "youtube" && (
                      <section className="profile-page youtube-page">
                        <AppIcon id="youtube" />
                        <h2>YouTube</h2>
                        <div className="profile-avatar">M</div>
                        <h3>{CONFIG.youtube.name}</h3>
                        <p>{CONFIG.youtube.username}</p>
                        <p>{CONFIG.youtube.bio}</p>
                        <div className="profile-stats">
                          <span><b>{CONFIG.youtube.subscribers}</b> inscritos</span>
                        </div>
                        {externalButton(CONFIG.youtube.url, "VISITAR MEU CANAL")}
                        <p className="privacy-note">Vídeos disponíveis no canal oficial ♡</p>
                      </section>
                    )}

                    {openedApp === "x" && (
                      <section className="x-page">
                        <div className="x-profile">
                          <div className="profile-avatar">M</div>
                          <div>
                            <h2>{CONFIG.name}</h2>
                            <p>@{CONFIG.x.username}</p>
                          </div>
                        </div>

                        <p className="x-bio">{CONFIG.x.bio}</p>

                        <div className="x-timeline">
                          {CONFIG.x.posts.map((post, index) => (
                            <article className="x-post" key={index}>
                              <div className="mini-avatar">M</div>
                              <div className="x-post-body">
                                <div className="x-post-author">
                                  <b>
                                    {index === 0 || index === 1 || index === 3
                                      ? "Chimmo Store"
                                      : "Mandi"}
                                  </b>
                                  <span>
                                    @{index === 2 ? "Mewtwy2" : "chimmostore"}
                                  </span>
                                  <MoreHorizontal size={17} />
                                </div>
                                <p>{post}</p>
                                <div className="x-actions">
                                  <span><MessageCircle size={15} /></span>
                                  <span><Repeat2 size={15} /></span>
                                  <span><Heart size={15} /></span>
                                  <span><Share2 size={15} /></span>
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </section>
                    )}

                    {openedApp === "spotify" && (
                      <section className="spotify-page">
                        <AppIcon id="spotify" />
                        <h2>{CONFIG.spotify.title}</h2>
                        <div className="playlist-cover">
                          <Music2 size={58} />
                          <span>MY FAVORITES ♡</span>
                        </div>
                        <p>{CONFIG.spotify.description}</p>
                        <p className="privacy-note">
                          Minha seleção de músicas favoritas.
                        </p>
                        {externalButton(CONFIG.spotify.url, "OUVIR NO SPOTIFY")}
                        <p className="small-note">
                          Configure o link da sua playlist na área CONFIGURAÇÕES.
                        </p>
                      </section>
                    )}

                    {openedApp === "store" && (
                      <section className="store-page">
                        <div className="store-logo">
                          <ShoppingBag size={43} />
                          <span>CHIMMO</span>
                        </div>
                        <p className="store-subtitle">K-POP FANMADE SHOP</p>
                        <h2>{CONFIG.store.name}</h2>
                        <p>{CONFIG.store.description}</p>
                        <div className="store-banner">
                          <span>your favorite little shop</span>
                          <strong>♡</strong>
                        </div>
                        {externalButton(CONFIG.store.url, "VISITAR MINHA LOJA")}
                      </section>
                    )}

                    {openedApp === "notes" && (
                      <section className="notes-page">
                        <div className="notes-toolbar">
                          <NotebookPen size={23} />
                          <span>Notas</span>
                          <MoreHorizontal size={22} />
                        </div>
                        <div className="note-date">Minha nota pessoal</div>
                        <h2>{CONFIG.notes.title}</h2>
                        <ul>
                          {CONFIG.notes.content.map((item, index) => (
                            <li key={index}>
                              <span className="note-bullet">○</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="note-footer">♡ não esquecer de sorrir!</p>
                      </section>
                    )}

                    {openedApp === "whatsapp" && (
                      <section className="whatsapp-page">
                        <div className="whatsapp-group">
                          <div className="group-avatar">
                            <MessageCircle size={29} />
                          </div>
                          <h2>{CONFIG.whatsapp.name}</h2>
                          <p>{CONFIG.whatsapp.description}</p>
                        </div>
                        <div className="chat-messages">
                          <span className="chat-date">HOJE</span>
                          {CONFIG.whatsapp.messages.map((message, index) => (
                            <div className="chat-message" key={index}>
                              {message}
                              <span>10:{index + 20} ♡</span>
                            </div>
                          ))}
                        </div>
                        {externalButton(CONFIG.whatsapp.url, "ENTRAR NO CANAL")}
                        <p className="privacy-note">
                          Esta é uma apresentação do canal oficial.
                        </p>
                      </section>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className="home-indicator"
              onClick={closeApp}
              aria-label="Voltar à tela inicial"
            />
          </div>
        </div>

        <p className="outside-caption">MY PINK PHONE ♡</p>
      </div>
    </main>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          