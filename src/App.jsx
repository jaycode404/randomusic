import React, { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { SimpleCard } from "./components/SongCard";

const InitialForm = "";
const apiKey = "a60c295dfa1345e0bdfb577a5cf7f884";
const client_secret = "67ed8bea421347caab5149855631ffd9";

function App() {
  const [canciones, setCanciones] = useState([]);
  const [form, setForm] = useState(InitialForm);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        apiKey +
        "&client_secret=" +
        client_secret,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  const searchSongs = async (form) => {
    

    const getParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    fetch(
      "https://api.spotify.com/v1/search?q=" + form + "&type=track",
      getParameters
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.tracks.items);
        setCanciones(data.tracks.items);
      });
  };

  return (
    <>
      <div className="mt-[3rem] mx-auto max-w-[80%] ">
        <div className="mt-[3rem] mx-auto flex flex-col items-center">
          <Form searchSongs={searchSongs} setForm={setForm} form={form} />
          <div className="m-10 opacity-[0.4]">
            {canciones.length === 0 && "Las canciones aparecerán aquí..."}
          </div>
          <div className="flex gap-9 flex-wrap mt-[1rem] w-[100%]">
            {canciones.map((cancion) => (
              <SimpleCard key={cancion.id} cancion={cancion} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
