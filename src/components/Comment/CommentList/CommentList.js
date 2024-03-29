import CommentCard from '../CommentCard/CommentCard';
import './CommentList.css';

function CommentList({ comments }) {
    return (
        <div className="container">
            <div className="row">
                <div className="panel panel-default widget">
                    <div className="panel-heading">
                        <span className="glyphicon glyphicon-comment"></span>
                        <h3 className="panel-title">Recent Comments</h3>
                        <span className="label label-info">
                            {comments.length}
                        </span>
                    </div>
                    <div className="panel-body">
                        {comments.length > 0 ? (
                            <ul className="list-group">
                                {comments.map((comment) => (
                                    <CommentCard
                                        key={comment._id}
                                        comment={comment}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <p className="text-muted">No comments added yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentList;
