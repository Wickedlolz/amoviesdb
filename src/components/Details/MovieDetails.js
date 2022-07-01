import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../Comment/CommentForm/CommentForm';
import CommentList from '../Comment/CommentList/CommentList';
import './MovieDetails.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MovieDetailsCard from './MovieDetailsCard';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/api/catalog/' + id)
            .then((res) => res.json())
            .then((movie) => {
                setMovie(movie);
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div className="container py-3">
            <div className="title h1 text-center">{movie.title}</div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="card">
                        <MovieDetailsCard movie={movie} />
                    </div>
                    <CommentForm />
                    <CommentList comments={movie.comments} />
                </>
            )}
        </div>
    );
}

export default MovieDetails;
