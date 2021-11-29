import React, { useMemo } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

const HeroScreen = () => {

const { heroId } = useParams();
const navigate = useNavigate();


const hero = useMemo(() => getHeroById(heroId), [heroId]);

if(!hero){
    return <Navigate to='/marvel' />;
}
const { id, superhero, alter_ego, publisher, first_appearance, characters } = hero;

const handleReturn= () => {
    navigate(-1);
}

    return (
        <div>
            <h1>{ publisher }</h1>
            <hr />
            <div className="col-3">

            
            <div className="card h-100">
                <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
                <div className="card-body">
                    <h3 className="card-title"> {superhero} </h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego: </b>  {alter_ego}</li>
                        <li className="list-group-item"><b>First appearance: </b> {first_appearance}</li>
                        <li className="list-group-item"> <b>Character: </b> {characters}</li>
                    </ul>
                </div>
                <div className="card-footer text-end">
                    <button 
                        className="btn btn-primary"
                        onClick={ handleReturn }    
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroScreen
