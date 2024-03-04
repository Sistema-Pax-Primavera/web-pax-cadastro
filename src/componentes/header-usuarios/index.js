import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'


const HeaderUsuarios = ({ idioma }) => {
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
      <label>Usuário</label>
      <button
        onClick={() => handleMenuClick("/usuarios/perfil")}
        className={activeRoute === "/usuarios/perfil" ? "active" : ""}
      >
       Perfil
      </button>
      <button
        onClick={() => handleMenuClick("/usuarios/parentesco")}
        className={activeRoute === "/usuarios/parentesco" ? "active" : ""}
      >
        Parentesco
      </button>
      <button
        onClick={() => handleMenuClick("/usuarios/estado-civil")}
        className={activeRoute === "/usuarios/estado-civil" ? "active" : ""}
      >
        Estado Civil
      </button>
      <button
        onClick={() => handleMenuClick("/usuarios/religiao")}
        className={activeRoute === "/usuarios/religiao" ? "active" : ""}
      >
       Religião
      </button>
      
    </div>
  );
};

export default HeaderUsuarios;