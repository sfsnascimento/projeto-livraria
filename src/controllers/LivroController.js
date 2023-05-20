import livros from "../models/Livro.js ";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const colecaoLivros = await livros.find().populate('autor').exec();
      return res.status(200).json(colecaoLivros);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async listarLivroPorId(req, res) {
    const { id } = req.params;

    try {
      const livro = await livros.findById(id).populate('autor', 'nome').exec();
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  static async cadastrarLivro(req, res) {
    const livro = req.body;

    try {
      const livroCadastrado = await livros.create(livro);
      return res.status(201).json(livroCadastrado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async atualizarLivro(req, res) {
    const { id } = req.params;

    try {
      await livros.findByIdAndUpdate(id, {
        $set: req.body
      });
      const livroAtualizado = await livros.find({ _id: id });
      return res.status(200).json(livroAtualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async excluirLivro(req, res) {
    const { id } = req.params;

    try {
      await livros.findOneAndDelete(id);
      return res.status(200).json({ message: 'Livro removido com sucesso'});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async listarLivroPorEditora(req, res) {
    const { editora } = req.query;
    console.log(editora)

    try {
      const livro = await livros.find({ editora });
      return res.status(200).json(livro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default LivroController;