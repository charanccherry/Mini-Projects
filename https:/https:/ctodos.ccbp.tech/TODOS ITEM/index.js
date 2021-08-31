import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails

  const onClickDeleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todoItem">
      <p className="text">{title}</p>
      <button className="button" type="button" onClick={onClickDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
