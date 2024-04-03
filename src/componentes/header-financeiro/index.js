import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header-financeiro.css'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className='navegacao-vendas'>
            <div className="back-header">
        <a onClick={handleVoltar}><ArrowBackIosNewIcon fontSize={'small'}/> VOLTAR</a>
      </div>
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