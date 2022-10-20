import autores from "../models/Autor.js";

class autorController {
  static listarautores = (req, res) => {
    autores.find((err, autores) => res.status(200).json(autores));
  };

  static listarPorId = (req, res) => {
    const { id } = req.params;
    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(500)
          .send({ Message: "impossivel localizar o autor", Erro: err });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarautor = (req, res) => {
    const autor = new autores(req.body);

    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ Message: "impossivel Realizar o cadastro", Erro: err });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarautor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "autor Atualizado com Sucesso" });
      } else {
        res
          .status(500)
          .send({ Message: "impossivel Realizar o cadastro", Erro: err });
      }
    });
  };

  static excluirautor = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndDelete(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "autor excluido com Sucesso" });
      } else {
        res
          .status(500)
          .send({ Message: "impossivel Realizar a exclusão", Erro: err });
      }
    });
  };
}

export default autorController;
