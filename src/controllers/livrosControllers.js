import livros from "../models/Livro.js";

class livroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => res.status(200).json(livros));
  };

  static listarPorId = (req, res) => {
    const { id } = req.params;
    livros.findById(id, (err, livros) => {
      if (err) {
        res
          .status(500)
          .send({ Message: "impossivel localizar o livro", Erro: err });
      } else {
        res.status(200).send(livros);
      }
    });
  };

  static cadastrarLivro = (req, res) => {
    const livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ Message: "impossivel Realizar o cadastro", Erro: err });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro Atualizado com Sucesso" });
      } else {
        res
          .status(500)
          .send({ Message: "impossivel Realizar o cadastro", Erro: err });
      }
    });
  };

  static excluirLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndDelete(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro excluido com Sucesso" });
      } else {
        res
          .status(500)
          .send({ Message: "impossivel Realizar a exclusão", Erro: err });
      }
    });
  };
}

export default livroController;
