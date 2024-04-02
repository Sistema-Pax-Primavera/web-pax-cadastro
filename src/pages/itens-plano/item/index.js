// Especie.js
import React, { useState } from "react";
import "./item.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { CSSTransition } from "react-transition-group";
import ArticleIcon from "@mui/icons-material/Article";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalCadastro from "../../../componentes/modal-cadastro";
import ButtonIconTextoStart from "../../../componentes/button-icon-texto-start";
import HeaderPet from "../../../componentes/header-pet";

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData("Gato", "Ativo"),
  createData("Cachorro", "Ativo"),
];

const Item = () => {
  const [modalAberta, setModalAberta] = useState(false);
  const [editando, setEditando] = useState(false);

  const handleEditClick = () => {
    setModalAberta(true);
    setEditando(true);
  };

  const handleOpenModal = (editando) => {
    console.log("Abrindo modal de cadastro...");
    setModalAberta(true);
    setEditando(editando);
  };
  
  

  const handleCloseModal = () => {
    setModalAberta(false);
    setEditando(false);
  };

  return (
    <div className="container-cadastro">
      <HeaderPet />
      <div className="sub-container-cadastro">
        <ModalCadastro
          textoBotao="CADASTRAR"
          icone2={<ArticleIcon />} // Ícone do Material UI
          titulo={editando ? "Editar" : "Cadastrar"} // Título do Modal
          open={modalAberta} // Definindo se a modal está aberta
          onClose={handleCloseModal} // Função para fechar a modal
          editando={editando} // Definindo se estamos editando
        >
          <div className="linhas-campos-cadastro">
            <div className="tipo-especie-cadas">
              <label>Espécie</label>
              <input></input>
            </div>
            <div className="buttao-salvar-especie">
              <ButtonIconTextoStart
                title={"SALVAR"}
                corFundoBotao={"#006b33"}
                corTextoBotao={"#ffff"}
              />
            </div>
          </div>
        </ModalCadastro>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">OPÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <div className="div-edit-cadastro-parentesco">
                        <div className="edit-cadastro-parentesco">
                          <button onClick={handleEditClick}>
                            <ModeEditOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                        <div className="edit-cadastro-paren">
                          <button onClick={handleOpenModal}>
                            <AddCircleOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Item;
