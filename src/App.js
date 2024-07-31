import { Component } from 'react';
import './App.css';
import Comentario from './Componentes/Comentario';

class App extends Component {
 //Criando Estados em react
  state = {
    comentarios:[
      {
      nome: "Guilherme",
      email: "guilherme@email.com",
      data: new Date(2024,3,19),
      mensagem: "Olá, tudo bem?"
      },
      {
        nome: "Kethilin",
        email: "keth@email.com",
        data: new Date(2024,3,22),
        mensagem: "Olá, tudo bem sim"
        }
    ],
    novoComentario:{
      nome: '',
      email:'',
      mensagem:''
    }
  }
  adicionarComentario = evento =>{
    evento.preventDefault();
   const novoComentario = {...this.state.novoComentario, data: new Date()}
    //Manipulando estados
    this.setState({comentarios: [... this.state.comentarios, novoComentario],
      novoComentario: {nome:'',email:'',mensagem:''}
    })
  }
 digitacao = evento =>{
  const {name,value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario,[name]:value}})
  }

  removerComentario = comentario =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c=> c!== comentario);

    this.setState({comentarios:lista})
  }



  render(){
    return(
        <div className="App">
          <h1> Meu Projeto </h1>
          {this.state.comentarios.map((comentario,indice)=>(
            <Comentario
              key={indice}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
              onRemove={this.removerComentario.bind(this,comentario)}>
              {comentario.mensagem}
            </Comentario>

          ))}
        <form method="POST" onSubmit={this.adicionarComentario}>
          <h2> Adicionar Comentário</h2>
          <div>
            <input type="text" 
            name="nome" 
            placeholder="Digite seu nome"
            value={this.state.novoComentario.nome}
            onChange={this.digitacao}
            required />
          </div>
          <div>
            <input type="email" 
            name="email" 
            placeholder="Digite seu email"
            value={this.state.novoComentario.email}
            onChange={this.digitacao}
            required />
          </div>
          <div>
            <textarea name="mensagem"
             rows="4" 
             value={this.state.novoComentario.mensagem}
             onChange={this.digitacao}
             required/>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
        </div>
    );
  }
  
}

export default App;
