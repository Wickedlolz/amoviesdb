import { Link } from 'react-router-dom';

function Pagination({ moviesCount, page, search }) {
    const pageSize = page * 8;

    const query = search ? `?search=${search}&page=` : `?page=`;

    return (
        <nav aria-label="Page navigation example" className="p-3">
            <ul className="pagination justify-content-center">
                <li className={page === 1 ? 'page-item disabled' : 'page-item'}>
                    <Link
                        to={'/catalog' + query + (page - 1)}
                        className={
                            page === 1 ? 'page-link disabled' : 'page-link'
                        }
                    >
                        Previous
                    </Link>
                </li>
                <li className="page-item">
                    <p className="page-link">
                        Showing {pageSize - 7}-
                        {pageSize > moviesCount ? moviesCount : pageSize} of{' '}
                        {moviesCount} results
                    </p>
                </li>
                <li
                    className={
                        pageSize >= moviesCount
                            ? 'page-item disabled'
                            : 'page-item'
                    }
                >
                    <Link
                        to={`/catalog${query}${page + 1}`}
                        className="page-link"
                    >
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
