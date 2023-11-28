// import React from 'react'
// import { useSelector } from 'react-redux' 

// const selectTodoIds = state => state.todos.map(todo => todo.id)

// const MovieList = () => {
//   const todoIds = useSelector(selectTodoIds)

//   const renderedListItems = todoIds.map(todoId => {
//     return <TodoListItem key={todoId} id={todoId} />
//   })

//   return <ul className="todo-list">{renderedListItems}</ul>
// }

import React from 'react'
import { useSelector } from 'react-redux'
// import TodoListItem from './TodoListItem'

const seleteMovie = state => state.todos

const MovieList = () => {
  const movies = useSelector(selectMovies)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList