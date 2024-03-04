import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'


const HeaderCadastro = ({ idioma }) => {
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

  useEffect(() => {
    const savedPage = localStorage.getItem("page-venda");

    if (savedPage && savedPage !== location.pathname) {
      localStorage.removeItem("page-venda");
      setActiveRoute("");
    } else {
      setActiveRoute(savedPage);
    }
  }, [location.pathname]);

  return (
    <div className='navegacao-vendas'>
      <button
        onClick={() => handleMenuClick("/usuarios")}
        className={activeRoute === "/usuarios" ? "active" : ""}
      >
       Usuários
      </button>
      <button
        onClick={() => handleMenuClick("/parentesco")}
        className={activeRoute === "/estado-civil" ? "active" : ""}
      >
        Unidades
      </button>
      <button
        onClick={() => handleMenuClick("/religiao")}
        className={activeRoute === "/pet" ? "active" : ""}
      >
        Pet
      </button>
      <button
        onClick={() => handleMenuClick("/setores")}
        className={activeRoute === "/setores" ? "active" : ""}
      >
       Setores
      </button>
      <button
        onClick={() => handleMenuClick("/forma-de-pagamento")}
        className={activeRoute === "/forma-de-pagamento" ? "active" : ""}
      >
        Forma de Pagamento
      </button>
      <button
        onClick={() => handleMenuClick("/atendimento")}
        className={activeRoute === "/atendimento" ? "active" : ""}
      >
        Atendimento
      </button>
    </div>
  );
};

export default HeaderCadastro;