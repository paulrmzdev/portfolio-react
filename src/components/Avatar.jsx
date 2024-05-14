import PropTypes from "prop-types";

function Avatar({imag}){
    const avatarStyles = {
        width: 100,
        borderRadius: "50%",
       // border: "5px solid var(--primary-color)"
    }
    return (
        <>
        <img src={imag} alt="Avatar" title="Avatar" style={avatarStyles}/>
        </>
    )
}

Avatar.propTypes = {
    imag: PropTypes.string,
}
export default Avatar