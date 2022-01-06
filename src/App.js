import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        "Sacar la ropa",
        "Hacer la cama",
        "Leer un rato"
      ],
      newTask: ''
    }
  }
  handleChange = (e) => {
    this.setState({newTask: e.target.value})
  }
  handleSubmit = (e) => {
    const newToDo = [...this.state.todoList];
    newToDo.push(this.state.newTask);
    this.setState({ todoList: newToDo, newTask: "" });
    e.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
          {
              this.state.todoList.map((value, index) => {
                return <li key={index}>{value}</li>
              })
            }
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text"  id="new-task" value={this.state.newTask} onChange= {this.handleChange}  placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
