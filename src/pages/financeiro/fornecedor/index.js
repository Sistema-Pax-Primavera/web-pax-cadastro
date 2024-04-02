import React, { useState } from "react";
import "./fornecedor.css";
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
import HeaderFinanceiro from "../../../componentes/header-financeiro";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, status, opcoes) {
  return { name, status, opcoes };
}

const fornecedoresData = [
  createData("Caixa", "Ativo"),
  createData("Planfetos", "Ativo"),
  createData("Urnas", "Ativo"),
];

const Fornecedor = () => {
  const [fornecedoresEstado, setFornecedoresEstado] =
    useState(fornecedoresData);

  const handleStatusChange = (index) => {
    const updatedFornecedores = fornecedoresEstado.map((fornecedor, i) => {
      if (i === index) {
        return {
          ...fornecedor,
          status: fornecedor.status === "Ativo" ? "Inativo" : "Ativo",
        };
      }
      return fornecedor;
    });
    setFornecedoresEstado(updatedFornecedores);
  };

  return (
    <div className="container-cadastro">
      <HeaderFinanceiro />
      <div className="sub-container-cadastro">
        <ModalCadastro
          buttonText="CADASTRAR"
          icone2={<ArticleIcon />} // Ícone do Material UI
          titulo="Cadastrar" // Título do Modal
          children={
            <div className="linhas-campos-cadastro">
              <div className="tipo-raca-cadas">
                <label>Fornecedor</label>
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
        <div className="tabelas-cadastro-usuarios">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Fornecedor</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">OPÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fornecedoresEstado.map((row, index) => (
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
                              <CheckCircleOutlineIcon
                              /> // Cor branca para visibilidade
                            ) : (
                              <HighlightOffIcon
                              />
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

export default Fornecedor;
