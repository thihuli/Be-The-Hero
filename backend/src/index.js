const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP
 * 
 * GET => Buscar uma infomação do back-end
 * POST => Criar uma informação no back-end
 * PUT => Alterar uma infomação no back-end
 * DELETE => Deletar uma infomação
 */

/**
  * Tipos de parâmetros
  * 
  * Query Params => Parâmetros nomeados enviados na rota após '?'
  * são (filtros, paginaçãp)
  * 
  * Route Params => ultilizados para idenfificar recusos
  * 
  * Request Body => Corpo da requisição, utilizados para criar ou
  * alterar recursos
  */

/**
   * Bancos de dados
   * 
   * SQL => MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * 
   * NoSQL => MongoDB, CouchDB e etc
   */



app.listen(3333);