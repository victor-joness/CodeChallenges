import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cidade, setCidade] = useState("");
  const [cityInput, setCityInput] = useState("");

  const [data, setData] = useState({
    temp: "",
    img: "",
    desc: "",
    name: "",
    umidade: "",
    speed: "",
    imgNuvem: "",
  });

  const handleCity = (city) => {
    setCidade(city);
    FetchDataApi(city);
  };

  const FetchDataApi = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9416c5b09c670c362c097560ebbff315&lang=pt_br`
    );

    const data = await res.json();

    const img = await fetch(
      `https://countryflagsapi.com/png/${data.sys.country}`
    );

    const imgNuvem = await fetch(
      `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );

    setData({
      name: data.name,
      img: img.url,
      desc: data.weather[0].description,
      umidade: data.main.humidity,
      speed: data.wind.speed,
      temp: data.main.temp,
      imgNuvem: imgNuvem.url,
    });

    return data;
  };

  return cidade !== "" ? (
    <div className="App">
      <div className="container-center">
        <h1>Confira o Clima de uma cidade: </h1>
        <div className="input">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button className="button-enter" onClick={() => handleCity(cidade)}>
            Pesquisar
          </button>
        </div>

        <div className="resultado">
          <div className="header">
            <h1>{data.name}</h1>
            <div className="image">
              <img src={data.img} crossOrigin="anonymous" alt="" />
            </div>
          </div>

          <div className="graus">
            <h1>{data.temp}&deg;C</h1>
          </div>

          <div className="infos">
            <div className="infos-dash">
              <h2>{data.desc}</h2>
              <div className="image">
                <img src={data.imgNuvem} alt="" />
              </div>
            </div>
          </div>

          <div className="umidade-speed">
            <div className="umidade">
              <h2>{`Umidade : ${data.umidade}%`}</h2>
            </div>

            <div className="speed">
              <h2>{`Vento : ${data.speed}km/h`}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="container-center">
        <h1>Confira o Clima de uma cidade: </h1>
        <div className="input">
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button
            className="button-enter"
            onClick={() => handleCity(cityInput)}
          >
            Pesquisar
          </button>
        </div>

        <div className="cidades">
          <div className="cidades-box">
            <button onClick={() => handleCity("Viena")}>Viena</button>
            <button onClick={() => handleCity("Copenhague")}>Copenhague</button>
          </div>

          <div className="cidades-box">
            <button onClick={() => handleCity("Zurique")}>Zurique</button>
            <button onClick={() => handleCity("Vancouver")}>Vancouver</button>
          </div>

          <div className="cidades-box">
            <button onClick={() => handleCity("Genebra")}>Genebra</button>
            <button onClick={() => handleCity("FrankFurt")}>FrankFurt</button>
          </div>

          <div className="cidades-box">
            <button onClick={() => handleCity("Osaka")}>Osaka</button>
            <button onClick={() => handleCity("Maceió")}>Maceió</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
