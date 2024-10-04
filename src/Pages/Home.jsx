import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <p>This is Home</p>
      <ButtonNavigate ruta={"/details"} title={"Detail Btn"}></ButtonNavigate>
      <ButtonNavigate ruta={"/profile"} title={"Profile Btn"}></ButtonNavigate>
    </>
  );
}


function ButtonNavigate({ ruta, title }) {
  const navigate = useNavigate();
  console.log(ruta);
  console.log(title);
  

  function handleClickDetails(rut) {
    navigate(rut);
  }

  return (
    <button
      onClick={() => handleClickDetails(ruta)}
      className="p-2 bg-slate-200 hover:bg-slate-500"
    >
      {title}
    </button>
  );
}
