import autores from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const colecaoAutores = await autores.find();
      return res.status(200).json(colecaoAutores);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async listarAutorPorId(req, res) {
    const { id } = req.params;

    try {
      const autor = await autores.findById(id);
      return res.status(200).json(autor);
    } catch (error) {
      return res.status(404).json({ message: 'Id do livro não localizado'});
    }
  }

  static async cadastrarAutor(req, res) {
    const autor = req.body;

    try {
      const autorCadastrado = await autores.create(autor);
      return res.status(201).json(autorCadastrado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async atualizarAutor(req, res) {
    const { id } = req.params;

    try {
      await autores.findByIdAndUpdate(id, {
        $set: req.body
      });
      const autorAtualizado = await autores.find({ _id: id });
      return res.status(200).json(autorAtualizado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async excluirAutor(req, res) {
    const { id } = req.params;

    try {
      await autores.findOneAndDelete(id);
      return res.status(200).json({ message: 'Autor removido com sucesso'});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export default AutorController;