import PropTypes from "prop-types";

export const TodoItem = ({todo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center"> {todo.description} </span>
            <button className="btn btn-danger btn-sm"> Borrar </button>            
        </li>
    )
}


TodoItem.propTypes = {
    todo:PropTypes.object,  //propiedad que recibe el componente
}