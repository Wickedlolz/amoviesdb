import styles from './CommentCard.module.css';

function CommentCard({ comment }) {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-xs-2 col-md-1">
                    <img
                        src={'http://localhost:3030' + comment.author.avatar}
                        className={
                            'img-circle img-responsive ' + styles['image-width']
                        }
                        alt="profile"
                    />
                </div>
                <div className="col-xs-10 col-md-11">
                    <div>
                        <div className="mic-info">
                            By: {comment.author.firstName}{' '}
                            {comment.author.lastName} on {comment.createdAt}
                        </div>
                    </div>
                    <div className="comment-text">{comment.content}</div>
                </div>
            </div>
        </li>
    );
}

export default CommentCard;
