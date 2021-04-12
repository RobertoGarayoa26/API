import React from 'react';
import './App.scss';
import { FC, useEffect, useState } from "react";


interface ICharacter {
  id: number;
  name: string;
  image: string;
}

interface IResponse {
  results: ICharacter[];
}

type CharacterProps = {
  character: ICharacter;
};

const Character: FC<CharacterProps> = ({ character: { id, name, image } }) => {
  return (
    <>
      <section>
        <div>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        </div>
      </section>
    </>
  );
};

const App: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const { results }: IResponse = await res.json();
      console.log(results);

      setCharacters(results);
    };
    console.log("useeffe");

    getCharacters();
  }, []);

  return (
    <main>
      <h2>Rick & Morty app</h2>
      <hr />
      <div>
        {characters.length > 0 &&
          characters.map((character, i) => (
            <Character key={i} character={character} />
          ))}
      </div>
    </main>
  );
};

export default App;
