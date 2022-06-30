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
                        <span className="label label-info">78</span>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {comments.map((comment) => (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentList;
