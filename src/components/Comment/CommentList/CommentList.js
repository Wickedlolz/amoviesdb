import CommentCard from '../CommentCard/CommentCard';
import './CommentList.css';

function CommentList({ comments }) {
    return (
        <div class="container">
            <div class="row">
                <div class="panel panel-default widget">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-comment"></span>
                        <h3 class="panel-title">Recent Comments</h3>
                        <span class="label label-info">78</span>
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
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
