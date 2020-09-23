import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (event) => this.setState({[event.target.name]: event.target.value});

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.title!==''){
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        }
        else{
            alert("Please add a task to add in list !!")
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add your activity here !' 
                    style = {{flex: '10', padding: '5px'}}
                    value = {this.state.title}
                    onChange= {this.onChange}
                />
                <input 
                    type='submit'
                    value='+ Add'
                    className='btn1'
                    style = {{flex: '1'}}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};


export default AddTodo
