import { useEffect, useState } from "react"

import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: "chito@mail.com"
    })


    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ] : value 
        });
    }
    
    useEffect(()=>{
        // console.log("UseEffect called!");
    }, []);
    

    useEffect(()=>{
        // console.log("formState changed!");
    }, [formState]);
    

    useEffect(()=>{
        // console.log("email changed!");
    }, [email]);
    
    

    return (
        <>
            <h1>Simple Form</h1>   
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
                placeholder="chito@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />            

            <button className="btn btn-primary mt-2">
                Save            
            </button>
            
            {
                (username == "strider2") && <Message/>                
            }
            
        </>
    )
}
