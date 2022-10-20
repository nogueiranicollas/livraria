import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", autorController.listarautores)
  .get("/autores/:id", autorController.listarPorId)
  .post("/autores", autorController.cadastrarautor)
  .put("/autores/:id", autorController.atualizarautor)
  .delete("/autores/:id", autorController.excluirautor);

export default router;
