import express from 'express';
import livros from './livroRoutes.js';
import autores from './autorRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Curso de node'});
  });

  app.use(
    express.json(),
    livros,
    autores
  );
}

export default routes;