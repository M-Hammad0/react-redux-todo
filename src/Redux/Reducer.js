const todoReducer = (state = [], action) => {
      switch(action.type){
            case 'ADD_TODO':
                  return [
                        ...state,
                        {
                              id: action.id,
                              title: action.title,
                              completed: false
                        }
                  ]
            case 'UPDATE_TODO':
                  return state.map(todo => todo.id === action.id ? {...todo,completed: !todo.completed }: todo) 
            case 'DELETE_TODO':
                  return state.filter(todo => todo.id !== action.id)
            case 'EDIT_TODO':
                  return state.map(todo => todo.id === action.id ? {...todo,title: action.title }: todo)             
                  
            default: return state      
      }

}

export default todoReducer;