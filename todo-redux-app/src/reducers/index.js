
const initialState = {
    todos: ['eat','sleep','pray','code']
  }

const reducer = (state=initialState, action) => {
    console.log(state);
    console.log(action);

    switch(action.type) {
        case  'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload.newtodo]
            }

        default:
            return state;
    } 
}

export default reducer;

