import React, { useState } from "react";
import "./setor.css";
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
import HeaderUsuarios from "../../../componentes/header-usuarios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, status, opcoes) {
  return { name, status, opcoes };
}

const funcaoData = [
  createData("TI", "Ativo"),
  createData("Administrador", "Ativo"),
  createData("Suporte", "Ativo"),
];

const Setor = () => {
  const [funcaoEstado, setFuncaoEstado] = useState(funcaoData);

  const handleStatusChange = (index) => {
    const updatedFuncao = funcaoEstado.map((funcao, i) => {
      if (i === index) {
        return {
          ...funcao,
          status: funcao.status === "Ativo" ? "Inativo" : "Ativo",
        };
      }
      return funcao;
    });
    setFuncaoEstado(updatedFuncao);
  };

  return (
    <div className="container-cadastro">
      <HeaderUsuarios />
      <div className="sub-container-cadastro">
        <div className="pesquisa-tabelas-cadastro">
        <div className="input-pesquisa-cadastro3">
            <input placeholder="Informe o nome"></input>
          </div>
          <div className="tamanho-botao-pesquisa">
            <ButtonIconTextoStart
              title={"PESQUISAR"}
              corFundoBotao={"#006b33"}
              corTextoBotao={"#ffff"}
              fontSizeBotao={"10px"}
            />
          </div>
          <ModalCadastro
            buttonText="CADASTRAR"
            icone2={<ArticleIcon />} // Ícone do Material UI
            titulo="Cadastrar" // Título do Modal
            children={
              <div className="linhas-campos-cadastro">
                <div className="tipo-raca-cadas">
                  <label>Setor</label>
                  <input></input>
                </div>
                <div className="buttao-salvar-raca">
                  <ButtonIconTextoStart
                    title={"SALVAR"}
                    corFundoBotao={"#006b33"}
                    corTextoBotao={"#ffff"}
                  />
                </div>
              </div>
            }
          ></ModalCadastro>
        </div>
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Setor</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">OPÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {funcaoEstado.map((row, index) => (
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
                          <button>
                            <ModeEditOutlineIcon fontSize={"small"} />
                          </button>
                        </div>
                        <div className="edit-gren-red">
                          <div
                            onClick={() => handleStatusChange(index)}
                            className={
                              row.status === "Ativo"
                                ? "green-background"
                                : "red-background"
                            }
                          >
                            {row.status === "Ativo" ? (
                              <CheckCircleOutlineIcon /> // Cor branca para visibilidade
                            ) : (
                              <HighlightOffIcon />
                            )}
                          </div>
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

export default Setor;
