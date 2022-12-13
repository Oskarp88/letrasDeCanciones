import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario';


function App() {
  const[letra, setLetra]=useState({});

  useEffect(()=>{
    if(Object.keys(letra).length===0)return;

    const consultarApiLetra = async ()=>{
        const {artista,cancion}=letra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const result = await fetch(url);
        const response = await result.json();
        console.log(response);
    }
    consultarApiLetra();
  },[letra]);
  return (
    <>
       <Formulario setLetra={setLetra}/>
    </>
  );
}

export default App;
