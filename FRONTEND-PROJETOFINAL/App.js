import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Inicio from './Inicio';
import VerLivros from './VerLivros';
import AdicionarLivro from './AdicionarLivro';
import EmprestarLivro from './EmprestarLivro';
import DevolverLivro from './DevolverLivro';
import RemoverLivro from './RemoverLivro';
import Usuarios from './Usuarios';
import AdicionarUsuario from './AdicionarUsuario';
import RemoverUsuario from './RemoverUsuario';
import VerUsuarios from './VerUsuarios';
import Info from './Info';
import Creditos from './Creditos';
import Emprestados from './Emprestados';

export default function App() {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="inicio" component={Inicio} title="Início" initial />
        <Scene key="verLivros" component={VerLivros} title="Ver Livros" />
        <Scene key="adicionarLivro" component={AdicionarLivro} title="Adicionar Livro" />
        <Scene key="emprestarLivro" component={EmprestarLivro} title="Emprestar Livro" />
        <Scene key="devolverLivro" component={DevolverLivro} title="Devolver Livro" />
        <Scene key="removerLivro" component={RemoverLivro} title="Remover Livro" />
        <Scene key="usuarios" component={Usuarios} title="Usuários" />
        <Scene key="info" component={Info} title="Informação" />
        <Scene key="creditos" component={Creditos} title="Créditos" />
        <Scene key="emprestados" component={Emprestados} title="Emprestados" />
        <Scene key="verUsuarios" component={VerUsuarios} title="Ver Usuários" />
        <Scene key="adicionarUsuario" component={AdicionarUsuario} title="Adicionar Usuário" />
        <Scene key="removerUsuario" component={RemoverUsuario} title="Remover Usuário" />
      </Stack>
    </Router>
  );
}
