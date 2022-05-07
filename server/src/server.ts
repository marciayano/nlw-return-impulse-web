import express from 'express';
import cors from 'cors';
import { routes } from './routes';

//Get buscar informacoes
//Post cadastrar info
//Put atualizar info de uma entidade
//Patch atualizar uma info unica de uma entidade
//Delete deletar uma info

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('http server running');
});