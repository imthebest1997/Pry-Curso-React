import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name })=>{           

    return <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
    </>
}

FirstApp.propTypes = {
    name: PropTypes.string,
    subTitle: PropTypes.number,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: "Chito Vera",
    subTitle: 0,
    title: "No hay title",
}