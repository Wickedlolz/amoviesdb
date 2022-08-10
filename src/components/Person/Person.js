import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPersonById } from '../../services/tmdb-api';
import LoadingSpinner from '../Common/LoadingSpinner';

function Person() {
    const [person, setPerson] = useState({});
    const [personCredits, setPersonCredits] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { personId } = useParams();

    useEffect(() => {
        getPersonById(personId)
            .then(([person, personTvCredits]) => {
                setPerson(person);
                setPersonCredits(personTvCredits);
                setIsLoading(false);
            })
            .catch((error) => console.log(error.message));
    }, [personId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="container">
            <h1 className="my-4">{person.name}</h1>

            <div className="row">
                <div className="col-md-8">
                    <img
                        className="img-fluid"
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt="img"
                    />
                </div>

                <div className="col-md-4">
                    <h3 className="my-3">Biography</h3>
                    <p>{person.biography}</p>
                    <p>
                        <span className="text-muted">Birthday</span>:{' '}
                        {person.birthday}
                    </p>
                    <p>
                        <span className="text-muted">Place of birth:</span>:{' '}
                        {person.place_of_birth}
                    </p>
                    <h3 className="my-3">Known For</h3>
                    <ul>
                        {personCredits.cast.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Person;
