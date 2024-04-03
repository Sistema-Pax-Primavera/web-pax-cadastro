import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const HeaderCadastro = ({ idioma }) => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (route) => {
    // Definir as rotas padrão para cada rota específica
    const defaultRoutes = {
      "/usuarios": "/usuarios/perfil",
      "/cobranca": "/cobranca/rota",
      "/pet": "/pet/raca",
      "/atendimento": "/atendimento/tipo-atendimento",
      "/pax": "/pax/planos",
      "/financeiro": "/financeiro/conta",
      "/item": "/item/categoria-item"
    };
  
    // Navegar para a rota específica ou para sua rota padrão
    const defaultRoute = defaultRoutes[route] || route;
    navigate(defaultRoute);
  
    // Salvar a rota no localStorage
    localStorage.setItem("page-venda", route);
  
    // Atualizar a rota ativa
    setActiveRoute(defaultRoute);
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
    <div className="navegacao-vendas">
      <button
        onClick={() => handleMenuClick("/usuarios")}
        className={
          activeRoute && activeRoute.startsWith("/usuarios") ? "active" : ""
        }
      >
        Usuários
      </button>
      <button
        onClick={() => handleMenuClick("/cobranca")}
        className={activeRoute === "/cobranca" ? "active" : ""}
      >
        Cobrança
      </button>
      <button
        onClick={() => handleMenuClick("/pet")}
        className={activeRoute === "/pet" ? "active" : ""}
      >
        Pet
      </button>
      <button
        onClick={() => handleMenuClick("/atendimento")}
        className={activeRoute === "/setores" ? "active" : ""}
      >
        Atendimento
      </button>
      <button
        onClick={() => handleMenuClick("/pax")}
        className={activeRoute === "/pax" ? "active" : ""}
      >
        Pax
      </button>
      <button
        onClick={() => handleMenuClick("/financeiro")}
        className={activeRoute === "/financeiro" ? "active" : ""}
      >
        Financeiro
      </button>
      <button
        onClick={() => handleMenuClick("/item")}
        className={activeRoute === "/item" ? "active" : ""}
      >
        Itens Planos
      </button>
    </div>
  );
};

export default HeaderCadastro;
