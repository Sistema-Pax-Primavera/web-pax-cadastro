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
        onClick={() => handleMenuClick("/usuarios/funcao")}
        className={activeRoute === "/usuarios/funcao" ? "active" : ""}
      >
        Função
      </button>
      <button
        onClick={() => handleMenuClick("/usuarios/setor")}
        className={activeRoute === "/usuarios/setor" ? "active" : ""}
      >
       Setor
      </button>
      <button
        onClick={() => handleMenuClick("/usuarios/permissao")}
        className={activeRoute === "/usuarios/permissao" ? "active" : ""}
      >
       Permissão
      </button>
      
    </div>
  );
};

export default HeaderUsuarios;