import React from 'react';
import {connect} from 'react-redux';


const Todo = (props) => {
    console.log(props.todos);
    return (
        <div>
            { props.todos.map( todo => <li>{todo}</li>) }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}


export default connect(mapStateToProps,{})(Todo);


//Connect is a HOC -  function that accepts a component and returns a component
//it's an HOF that will return a function that returns an HOC
