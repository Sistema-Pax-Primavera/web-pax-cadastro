import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-atendimento.css'


const HeaderAtendimento = ({ idioma }) => {
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
      <label>Atendimento</label>
      <button
        onClick={() => handleMenuClick("/atendimento/tipo-atendimento")}
        className={activeRoute === "/atendimento/tipo-atendimento" ? "active" : ""}
      >
       Tipo Atendmento
      </button>
      <button
        onClick={() => handleMenuClick("/atendimento/tipo-sub-atendimento")}
        className={activeRoute === "/atendimento/tipo-sub-atendimento" ? "active" : ""}
      >
        Tipo Sub Atendimento
      </button>
      
      
    </div>
  );
};

export default HeaderAtendimento;