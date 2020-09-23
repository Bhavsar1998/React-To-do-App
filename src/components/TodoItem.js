import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    // //when used without arrow func, need to get binded in calling
    // markComplete(){
    //     console.log(this.props);
    // }
    // markComplete =(event)=>{
    //     console.log(this.props);
    // }

    render() {
        const { id, title } = this.props.todo;
        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{'  '}
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={buttonStyle}>-</button>
                </p>

            </div>

        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

const buttonStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// const itemStyle ={
//     backgroundColor: '#f4f4f4'
// }  
export default TodoItem
