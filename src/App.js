import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import ResetPlan from './components/layout/ResetPlan';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import About from './components/pages/About';
import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'study',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Dinner',
      //   completed: false
      // }
    ]
  }

  //toggling complete (true/false)
  markComplete = (id) => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map
        (todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
    });
  }

  //delete todo
  deleteTodo = (id) => {
    // console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  deleteTodoList = () =>{
    if(this.state.todos.length===0){
      alert("No Plan revised !!");
    }
    else{
      if(window.confirm("Are you sure you want to reset your plan ?")){
        this.setState({todos: []});
      }

    }
  }
  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
            <ResetPlan deleteTodoList={this.deleteTodoList} />
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
