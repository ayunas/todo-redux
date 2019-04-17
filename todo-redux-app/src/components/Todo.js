import React from 'react';


const Todo = (props) => {
    console.log(props.todos);
    return (
        <div>
            { props.todos.map( todo => <li>{todo}</li>) }
        </div>
    )
}

export default Todo;

