
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #ffe0ef, #f8a8ce)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      color: "#8b3561"
    }}>
      <div style={{
        width: "300px",
        height: "600px",
        border: "8px solid #fff",
        borderRadius: "40px",
        background: "#fff5fa",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "center"
      }}>
        <h2>♡ My Pink Phone ♡</h2>
        <h1>09:41</h1>
        <p>Bem-vinda ao seu celular virtual!</p>
        <div style={{fontSize: "45px", marginTop: "60px"}}>
          🌸 💗 🎀
        </div>
        <p>Seu mundo, suas regras.</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
