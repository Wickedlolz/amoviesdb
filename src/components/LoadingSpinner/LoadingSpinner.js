import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
    return (
        <div className="text-center p-2">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default LoadingSpinner;
