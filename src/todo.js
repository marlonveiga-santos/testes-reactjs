import React, { Component } from 'react';
import './todo.css';
import ToDoItem from './Component/todoItem';
import Logo from './logo.svg';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Construtor do modelo de dados - Reusable
            list: [
                {
                    'todo': 'Limpar o quarto'
                },
                {
                    'todo': 'Ir ao mercado'
                }
            ],
            todo: ''
        };
    };

            // Criação de novo item - Creator
    createNewToDoItem = () => {
        this.setState(({ list, todo }) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ''
        }));
    };

            // Verificador de atalho do teclado - Enter para adicionar item
    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };
            //Verificador de botão natela - ToDo-Add para adicionar item
    handleButtonPress = e => {
        if (this.myInput.value !== '') {
            
                this.createNewToDoItem();
            
        }
    };


            //verificador de entrada no campo de texto
    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };


        // Método de remoção de item da lista
        // Renderiza o estado da aplicação, sem o item selecionado
        //this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };


    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo" />
                <h1 className="ToDo-Header">Lista de Tarefas</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.state.list.map((item, key) => {
                            return <ToDoItem
                                key={key}
                                item={item.todo}
                                deleteItem={this.deleteItem.bind(this, key)}
                            />
                        }
                        )}
                    </div>

                    <div> 
                        <input ref={input => {this.myInput = input;}} 
                        type="text" value={this.state.todo} onChange={this.handleInput} 
                        onKeyPress={this.handleKeyPress} 
                        />
                        <button className="ToDo-Add" onClick={this.handleButtonPress}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;