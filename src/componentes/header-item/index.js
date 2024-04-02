import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-item.css'


const HeaderItem = ({ idioma }) => {
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
      <label>Itens dos Planos</label>
      <button
        onClick={() => handleMenuClick("/item/categoria-item")}
        className={activeRoute === "/item/categoria-item" ? "active" : ""}
      >
       Categoria do Item
      </button>
      <button
        onClick={() => handleMenuClick("/item/itens")}
        className={activeRoute === "/item/itens" ? "active" : ""}
      >
        Item
      </button>
      
      
    </div>
  );
};

export default HeaderItem;