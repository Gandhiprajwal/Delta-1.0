import { useEffect } from "react";
import { useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/jokes/random";
  let [joke, setJoke] = useState({});
  const getJoke = async () => {
    let res = await fetch(URL);
    let jsonResponse = await res.json();
    // console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };
  useEffect(
    () =>
      async function getFirstJoke() {
        let res = await fetch(URL);
        let jsonResponse = await res.json();
        // console.log(jsonResponse);
        setJoke({
          setup: jsonResponse.setup,
          punchline: jsonResponse.punchline,
        });
      },
    []
  );
  return (
    <>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Get</button>
    </>
  );
}
