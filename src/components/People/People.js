import { endpoints } from '../../services/tmdb-api';
import ActorList from '../ActorList/ActorList';

function People() {
    return (
        <>
            <h2 className="p-2 text-center">Most popular actors</h2>
            <ActorList fetchUrl={endpoints.POPULAR_ACTORS} />
        </>
    );
}

export default People;
