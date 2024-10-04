import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  { to: "/", text: "Home" },
  { to: "/profile", text: "Profile" },
  { to: "/details", text: "Details" },
];

export default function NavBar() {
    
  return (
    <nav className="bg-green-300">
      <ul className="flex gap-4">
        {routes.map((r,index) => (
          <li key={index}>
            <NavLink to={r.to} className={({isActive})=> isActive ? "text-red-600":""}>{r.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
