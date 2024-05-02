import React, { useState } from "react";
import "./planos.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ButtonIconTextoStart from "../../../components/button-icon-texto-start";
import HeaderPax from "../../../components/header-pax";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ModalEdicao from "../../../components/modal-edicao";

function createData(name, status, opcoes) {
  return { name, status, opcoes };
}

const funcaoData = [
  createData("Plano Luxo", "Ativo"),
  createData("PLano Simples", "Ativo"),
  createData("Plano Médio", "Ativo"),
];

const Planos = () => {
  const [funcaoEstado, setFuncaoEstado] = useState(funcaoData);
  const [modalEdicaoOpen, setModalEdicaoOpen] = useState(false);
  const [modalCadastroOpen, setModalCadastro] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]);
  const units = ["Selecione", "Dourados", "Itaporã", "Ponta Porã"];

  const handleUnitChange = (event) => {
    const selected = event.target.value;
    if (selected !== "" && !selectedUnits.includes(selected)) {
      setSelectedUnits([...selectedUnits, selected]);
    }
    setSelectedUnit("");
  };

  const handleRemoveUnit = (unit) => {
    setSelectedUnits(selectedUnits.filter((u) => u !== unit));
  };
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
  const handleOpenModalEdicao = () => {
    setModalEdicaoOpen(true);
  };

  const handleCloseModalEdicao = () => {
    setModalEdicaoOpen(false);
  };

  const abrirModalCadastro = () => {
    setModalCadastro(true);
  };

  const fecharModalCadastro = () => {
    setModalCadastro(false);
  };
  return (
    <div className="container-cadastro">
      <HeaderPax />
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
          <div className="tamanho-botao-pesquisa">
            <ButtonIconTextoStart
              title={"Cadastrar"}
              corFundoBotao={"#006b33"}
              corTeaxtoBotao={"#ffff"}
              fontSizeBotao={"10px"}
              funcao={() => abrirModalCadastro()}
            />
          </div>
          <ModalEdicao
            titulo="Cadastrar Planos"
            isOpen={modalCadastroOpen}
            onClose={fecharModalCadastro}
          >
            <div className="linhas-campos-cadastro">
              <div className="tipo-parentesco-cadas">
                <label>Plano</label>
                <input></input>
              </div>
              <div className="tipo-parentesco-cadas">
                <label>Unidade</label>
                <select value={selectedUnit} onChange={handleUnitChange}>
                  {units.map((unit) => (
                    <option key={unit} disabled={selectedUnits.includes(unit)}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              <div className="buttao-salvar-parentesco">
                <ButtonIconTextoStart
                  title={"SALVAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                />
              </div>
            </div>
            <div className="linhas-campos-plano2">
              {selectedUnits.map((unit, index) => (
                <div key={index} className="linhas-campos-plano2">
                  <div className="linhas-campos-plano3">
                    <label>{unit}</label>
                    <div className="linhas-campos-cadastro">
                      <div className="tipo-parentesco-cadas2">
                        <label>Mensalidade</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Cartão</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Adicional</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Transferência</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>Carência Novo</label>
                        <input></input>
                      </div>
                    </div>
                    <div className="linhas-campos-cadastro">
                      <div className="tipo-parentesco-cadas2">
                        <label>Carência Atraso</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>Quant. Dependente</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Adesão</label>
                        <input></input>
                      </div>
                      <div className="button-planos">
                        <button onClick={() => handleRemoveUnit(unit)}>
                          <HighlightOffIcon fontSize={"small"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ModalEdicao>
          <ModalEdicao
            titulo="Editar Planos"
            isOpen={modalEdicaoOpen}
            onClose={handleCloseModalEdicao}
          >
             <div className="linhas-campos-cadastro">
              <div className="tipo-parentesco-cadas">
                <label>Plano</label>
                <input></input>
              </div>
              <div className="tipo-parentesco-cadas">
                <label>Unidade</label>
                <select value={selectedUnit} onChange={handleUnitChange}>
                  {units.map((unit) => (
                    <option key={unit} disabled={selectedUnits.includes(unit)}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              <div className="buttao-salvar-parentesco">
                <ButtonIconTextoStart
                  title={"SALVAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                />
              </div>
            </div>
            <div className="linhas-campos-plano2">
              {selectedUnits.map((unit, index) => (
                <div key={index} className="linhas-campos-plano2">
                  <div className="linhas-campos-plano3">
                    <label>{unit}</label>
                    <div className="linhas-campos-cadastro">
                      <div className="tipo-parentesco-cadas2">
                        <label>Mensalidade</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Cartão</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Adicional</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Transferência</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>Carência Novo</label>
                        <input></input>
                      </div>
                    </div>
                    <div className="linhas-campos-cadastro">
                      <div className="tipo-parentesco-cadas2">
                        <label>Carência Atraso</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>Quant. Dependente</label>
                        <input></input>
                      </div>
                      <div className="tipo-parentesco-cadas2">
                        <label>V. Adesão</label>
                        <input></input>
                      </div>
                      <div className="button-planos">
                        <button onClick={() => handleRemoveUnit(unit)}>
                          <HighlightOffIcon fontSize={"small"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ModalEdicao>
        </div>
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
                          <button onClick={() => handleOpenModalEdicao()}>
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

export default Planos;
