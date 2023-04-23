import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const [repo, setRepo] = useState();

  const user = JSON.parse(localStorage.getItem("User"));

  const url = `https://api.github.com/users/${user.login}/repos`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepo(data))
      .catch((req, res) => console.log(res));
  }, [url]);

  return (
    <div className="container">
      <div className="container-esquerda">
        <div className="image">
          <img src={user.avatar_url} alt="" />
        </div>
        <h1>{user.name}</h1>
        <h2>@{user.login}</h2>
        <div className="folows">
          <h2>Followers: {user.followers}</h2>
          <h2>Following: {user.following}</h2>
        </div>
        <h2>Repositórios públicos: {user.public_repos}</h2>
        <p>{user.bio}</p>
        <Link className="button" to={user.html_url}>
          Ver Perfil
        </Link>
        <Link className="button" to={"http://localhost:5173"}>Voltar</Link>
      </div>

      <div className="container-direita">
        <h1>Repositórios</h1>
        {repo?.map((rep) => 
        
        <div className="container-repositorio">
          <div className="repoInfo">
            <div className="name">{rep.name}</div>
            <div>{rep.language}</div>
          </div>

          <div className="stats">
            <div>{rep.stargazers_count}</div>
            <div>{rep.forks_count}</div>
          </div>

          <Link className="button" to={rep.html_url}>Ver Mais</Link>

          <div className=""></div>
        </div>
        
        )}
      </div>
    </div>
  );
};

export default UserProfile;
