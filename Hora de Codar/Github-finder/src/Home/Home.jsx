import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import gitImg from "../assets/25231.png";
import gitImgDark from "../assets/github-logo (1).png";

const Home = () => {
  const [userName, setUserName] = useState("");

  const url = "https://api.github.com/users/";

  const navigate = useNavigate();

  const handleDackMode = () => {
    const mode = localStorage.getItem("Mode");

    if (mode === "true") {
      localStorage.setItem("Mode", false);
    } else {
      localStorage.setItem("Mode", true);
    }

    const app = window.document.querySelector(".App");
    app.classList.toggle("dark");

    const imgDark = window.document.querySelector(".img-dark");
    const img = window.document.querySelector(".img");
    const nome = window.document.querySelector(".nome");
    const body = window.document.querySelector("body");
    const button = window.document.querySelector(".buttonContainer");

    if (app.classList.contains("dark")) {
      img.classList.add("none");
      imgDark.classList.add("active");
      body.classList.add("dark");
      nome.classList.add("dark");
      button.classList.add("dark");
    } else {
      img.classList.remove("none");
      imgDark.classList.remove("active");
      body.classList.remove("dark");
      nome.classList.remove("dark");
      button.classList.remove("dark");
    }
  };

  const handleSubmit = () => {
    fetch(`${url}${userName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Not Found") {
          navigate("*");
          localStorage.setItem("User", data);
          console.log(data);
        } else {
          setTimeout(() => {
            {
              navigate("/user"),
                localStorage.setItem("User", JSON.stringify(data));
            }
          }, 1000);
        }
      })
      .catch((req, res) => {
        console.log(res);
      });
  };

  return (
    <div className="App">
      <div className="buttonContainer" onClick={handleDackMode}>
        Dark Mode
      </div>
      <h1>Github Finder</h1>
      <div className="img">
        <img src={gitImg} alt="" />
      </div>

      <div className="img-dark">
        <img src={gitImgDark} alt="" />
      </div>

      <p>Site para encontrar programadores de maneira rápida e fácil!</p>

      <div className="inputBox">
        <p>Digite o nome do desenvolvedor abaixo</p>
        <div className="input">
          <input
            type="text"
            value={userName}
            placeholder="ex: victor-joness"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Encontrar</button>
        </div>
      </div>

      <div className="footer">
        <span>
          Developer by <span className="nome">Victor Mesquita</span>
        </span>
      </div>
    </div>
  );
};

export default Home;
