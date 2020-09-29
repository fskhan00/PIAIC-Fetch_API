import React, { useEffect, useState } from "react";

export function Fetch() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {
    async function getRepo() {
      const response = await fetch(
        "https://api.github.com/users/fskhan00/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepos(data);
    }
    getRepo();
  }, []);
  return (
    <div>
      <ul>
        {repos.map((repoObj, index) => {
          return <li key={index}>{repoObj.name}</li>;
        })}
      </ul>
    </div>
  );
}
