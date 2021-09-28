import React from 'react'

window.id=0
class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      todo: ''
    }
  }

  addTodo = (val) => {
    const todo = {text: val, id: window.id++}
    let new_d = this.state.data
    new_d.push(todo)
    this.setState({data: new_d})
    this.setState({todo: ''})
  }
  handleRemove = (removeTodo) => {
    const remainder = this.state.data.filter((todo) => {
      return (todo.id !== removeTodo.id)
    });
    this.setState({data: remainder})
  }
  handleChange = (value) => {
    this.setState({todo:value})
  }

  render(){
    let input;
    const Todo = ({todo, remove}) => {
      return(<li  key={todo} onClick={() => {remove(todo)}}>{todo.text}</li>)
    }
    const TodoList = ({todos, remove}) => {
      const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />
        )
      })
      return(<ul>{todoNode}</ul>)
    }

    return(
      <div>
       <h2>
          Todo
        </h2>
        <div>
          <input value={this.state.todo} onChange={(e) => this.handleChange(e.target.value)}/>
          <button onClick={() => this.addTodo(this.state.todo)}> + </button>
        </div>

        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    )
  }
}
export default Todo