"use client"

import { useState } from 'react';
import Card from './card'

export default function Home() {

  const [name, setName] = useState("Amit");

  const [words, setWords] = useState([
    'appeared',
    'wit',
    'milk',
    'desk',
    'meet',
    'yonder',
    'hand',
    'grant',
    'believes',
    'obey'
  ]);

  setTimeout(() => {
    setName("Niv");
    // words[0] += " Edited";
    // setWords(words);

  }, 3 * 1000);


  return (
    <main>
      <h1>{name}</h1>
      <Card words={words.slice(0, 4)} />
      <Card words={words.slice(4, 8)} />
      <Card words={words.slice(8, 10)} />
    </main>
  )
}
