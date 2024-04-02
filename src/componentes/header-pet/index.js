import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-pet.css'


const HeaderPet = ({ idioma }) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (route) => {
    // Navegar para a rota específica
    navigate(route);
    // Salvar a rota no localStorage
    localStorage.setItem("page-venda", route);
    // Atualizar a rota ativa
    setActiveRoute(route);
  };

  return (
    <div className='navegacao-vendas'>
      <label>Pet</label>
      <button
        onClick={() => handleMenuClick("/pet/raca")}
        className={activeRoute === "/pet/raca" ? "active" : ""}
      >
       Raça
      </button>
      <button
        onClick={() => handleMenuClick("/pet/especie")}
        className={activeRoute === "/pet/especie" ? "active" : ""}
      >
        Espécie
      </button>
      
      
    </div>
  );
};

export default HeaderPet;