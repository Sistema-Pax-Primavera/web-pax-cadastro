import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-item.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="navegacao-vendas">
      <div className="back-header">
        <a onClick={handleVoltar}>
          <ArrowBackIosNewIcon fontSize={"small"} /> VOLTAR
        </a>
      </div>
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
