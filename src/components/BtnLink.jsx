import PropTypes from "prop-types";

function BtnLink ({icon,name,link}){
    
    const btnStyles = {
        textDecoration: "none",
        borderRadius: 15,
        padding:4,
        paddingLeft:15,
        paddingRight:15,
        display:"flex",
        width:80
    };

    return (
        <>
            <a href={link} className="btn" style={btnStyles} target="_blank" rel="noopener noreferrer"><img width={30} src={icon} alt={name} title={name}/>{name}</a>
        </>
    )
}

BtnLink.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
}

export default BtnLink