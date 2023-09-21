import PropTypes from "prop-types";
import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
    console.log("Me volvi a generar");
    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                increment(5);
            }}
        >
            Increment
        </button>
    )
});


// Define el nombre de visualización
ShowIncrement.displayName = "ShowIncrement";

ShowIncrement.propTypes ={
    increment: PropTypes.func.isRequired
}
