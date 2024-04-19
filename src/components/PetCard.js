import '../assets/css/pet.css';
import { Link } from "react-router-dom"


export default function Pet(props) {

    const pet = props.pet

    return (
        <article className="pet-card">
            <Link className="pet-link" to={`/pets/${pet.id}`} state={{pet: pet}}>
                <img src={`${pet.photo}`} alt="pet"/> 
                <span className="pet-name">{pet.name}</span>
                <span className="pet-birthday">{pet.birthday}</span>
            </Link>
            <button className="btn-pet-schelude">AGENDAR</button>
        </article>
    )
}        

