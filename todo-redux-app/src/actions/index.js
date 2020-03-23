

export function ActionMaker(newtodo) {
    
    return {
        type: 'ADD_TODO',
        payload: {
            newtodo : newtodo 
        }
    }
}



