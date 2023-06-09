import { Router } from "express";
import LivroController from "../controllers/LivroController.js";

const router = Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivroPorEditora)
  .get('/livros/:id', LivroController.listarLivroPorId)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro);

export default router;