import React, { useEffect, useState } from "react";
import {Card} from "../components/Card";
import { InputGroup } from "./filters/category/InputGroup";
import { NavBar } from "./NavBar";

export const Episodes = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data); // guardando info de la api

      let charactersForEpisodes = await Promise.all(
        data.characters.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(charactersForEpisodes);
    // guardando datos de los personajes por episodio
    })();
  }, [api]);

  return (
    <div className="container">
      <NavBar />
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air date :{air_date === "" ? "Unknown" : air_date}
        </h5>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">Pick Episode</div>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-13 col-12">
          <div className="row">
            <Card paginated={results} />
          </div>
        </div>
      </div>
    </div>
  );
};
