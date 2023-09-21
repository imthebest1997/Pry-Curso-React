import { UserContext } from "./context/UserContext";
import { useContext } from "react"

export const LoginPage = () => {
  
  const {user, setUser} = useContext(UserContext);

  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>        

        <button 
          className="btn btn-outline-primary"
          onClick={() => setUser({ id: 1234, name: "Chito Vera", mail: "chito@mail.com"})}  
        >
          Establecer Usuario
        </button>

    </>
  )
}
