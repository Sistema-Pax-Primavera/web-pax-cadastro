import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-financeiro.css'


const HeaderFinanceiro = ({ idioma }) => {
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
      <label>Financeiro</label>
      <button
        onClick={() => handleMenuClick("/financeiro/conta")}
        className={activeRoute === "/financeiro/conta" ? "active" : ""}
      >
       Conta
      </button>
      <button
        onClick={() => handleMenuClick("/financeiro/forma-pagamento")}
        className={activeRoute === "/financeiro/forma-pagamento" ? "active" : ""}
      >
        Forma de Pagamento
      </button>
      <button
        onClick={() => handleMenuClick("/financeiro/plano-conta")}
        className={activeRoute === "/financeiro/plano-conta" ? "active" : ""}
      >
       Plano Conta
      </button>
      <button
        onClick={() => handleMenuClick("/financeiro/fornecedor")}
        className={activeRoute === "/financeiro/fornecedor" ? "active" : ""}
      >
        Fornecedor
      </button>
      
      
    </div>
  );
};

export default HeaderFinanceiro;