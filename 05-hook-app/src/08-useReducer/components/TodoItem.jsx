import PropTypes from "prop-types";

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {    
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ""}`}
                onClick={() => onToggleTodo(todo.id)}
            > 
                {todo.description} 
            </span>

            <button 
                className="btn btn-danger btn-sm"
                onClick={() => onDeleteTodo(todo.id)}
            > Borrar </button>            
        </li>
    )
}


TodoItem.propTypes = {
    todo:PropTypes.object,  //propiedad que recibe el componente
    onDeleteTodo:PropTypes.func,  //propiedad que recibe el componente
    onToggleTodo:PropTypes.func,  //propiedad que recibe el componente
}