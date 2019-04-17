import React from 'react';
import Todo from './Todo';

const Todos = (props) => {

    return (
        <ol>
            <Todo todos={props.todos}/>
        </ol>
    )
}

export default Todos;

