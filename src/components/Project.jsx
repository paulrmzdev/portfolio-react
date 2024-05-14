import PropTypes from "prop-types";
import BtnLink from './BtnLink';

function Project({name,image,techs,description,view,code}){

    const cardStyles = {
        display:"flex",
        width:"100%",
        justifyContent:"space-around",
        flexWrap:"wrap",
        marginBottom:40
    }

    const cardInfoStyles = {
        width: 380,
        textAlign:"left"
    };

    const imgStyles = {
        width: "100%",
        maxWidth:400,
        height: 250,
        borderRadius: 15,  
        objectFit:"cover",
        objectPosition: "top",
        boxShadow:"3px 3px 15px var(--primary-color)"
    };

    return (
        <>
        <div className="card" style={cardStyles}>
            <img className="projectImg" src={image} alt="" style={imgStyles}/>
            <div className="cardInfo" style={cardInfoStyles}>
                <h3>{name}</h3>
                <div className="techs" style={{display:"flex",justifyContent:"space-between"}}>
                {techs.map(element => <span key={element} style={{fontWeight:"bold"}}>{element}</span>)}
                </div>
                <p>{description}</p>
                <div className="" style={{display:"flex"}}>
                    <BtnLink icon="https://img.icons8.com/ios-filled/50/ffffff/github.png" name="Code" link={code}/>
                    <BtnLink icon="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/ffffff/external-_32-user-interface-jumpicon-(line)-jumpicon-line-ayub-irawan-2.png" name="Preview" link={view} />
                </div>
            </div>
        </div>
    </>
    )
}

Project.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    techs: PropTypes.array,
    description: PropTypes.string,
    view: PropTypes.string,
    code: PropTypes.string
}


export default Project