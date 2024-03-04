import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-unidades.css'


const HeaderUnidades = ({ idioma }) => {
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
      <label>Unidades</label>
      <button
        onClick={() => handleMenuClick("/unidades/estado")}
        className={activeRoute === "/unidades/estado" ? "active" : ""}
      >
       Estado
      </button>
      <button
        onClick={() => handleMenuClick("/unidades/cidade")}
        className={activeRoute === "/unidades/cidade" ? "active" : ""}
      >
        Cidade
      </button>
      <button
        onClick={() => handleMenuClick("/unidades/bairro")}
        className={activeRoute === "/unidades/bairro" ? "active" : ""}
      >
        Bairro
      </button>
      
    </div>
  );
};

export default HeaderUnidades;