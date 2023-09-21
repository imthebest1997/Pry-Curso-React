import PropTypes from "prop-types";
import {useForm} from "../../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
    // const [description, setDescription] = useState("");
    const {description, onInputChange, onResetForm} = useForm({
        description: ""
    });    

    const handleSubmit = (e) => {
        e.preventDefault();   
        if(description.length <= 1 ) return;     

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                name="description"
                className="form-control form-control-sm"
                onChange={onInputChange}
                value={description}
            />

            <button
                type="submit"
                className="btn btn-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTodo:PropTypes.func,  //propiedad que recibe el componente
}
