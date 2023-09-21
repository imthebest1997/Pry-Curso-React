import { Message } from "./Message";
import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const {username, email, password} = formState;
    
    return (
        <>
            <h1>Form with Custoom Hook</h1>   
            <hr />

            <input 
                className="form-control"
                type="text" 
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />            

            <input 
                className="form-control mt-2"
                type="email" 
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />            

            <input 
                className="form-control mt-2"
                type="password" 
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />            

            <button onClick={onResetForm}   className="btn btn-primary mt-2">
                Reset            
            </button>
            
            {
                (username == "strider2") && <Message/>                
            }
            
        </>
    )
}
