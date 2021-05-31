let incrementId = 0;

export const addTodo = todo => ({
      type: 'ADD_TODO',
      id: incrementId++,
      title: todo.title
})

export const updateTodo = id => ({
      type: 'UPDATE_TODO',
      id
})

export const deleteTodo = id => ({
      type: 'DELETE_TODO',
      id
})

export const editTodo = (id,title) => ({
      type: 'EDIT_TODO',
      id,
      title
})