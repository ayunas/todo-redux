import React from 'react';
import {ActionMaker} from '../actions/index';
import {connect} from 'react-redux';


const AddTodo = (props) => {
    
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.ActionMaker(e.target.addtodo.value)}}>
            <input name='addtodo' placeholder='Add Todo'></input>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}


export default connect(mapStateToProps,{ActionMaker : ActionMaker})(AddTodo);

//2nd object will put props for the component invoked in 2nd argument
//mapState returns an object of props reading from state
//Object in 2nd argument is for props given to the component. it's exclusive only for actionmakers.


