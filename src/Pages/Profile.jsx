import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'



export default function Profile() {
  const navigate = useNavigate();
  const objeto = {name: "pepe",age: 20}


  function handleClickDetails() {
    navigate("/details" , {state: objeto})
  }

  function navigateParams(id,name) {
    navigate(`/details/${id}/${name}`)
  }

  return (
    <>
    <div>Profile</div>
    <p>This is Profile</p>
    <button
      onClick={()=> handleClickDetails()} 
      className='p-2 bg-slate-200 hover:bg-slate-500'>Details Button</button>
        <button
    onClick={()=> navigateParams(1,"pepe")} 
    className='p-2 bg-slate-200 hover:bg-slate-500'>Params</button>
  
  </>
  )
}