import styles from './CommentCard.module.css';

function CommentCard({ comment }) {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-xs-2 col-md-1">
                    <img
                        src="/images/programmer.png"
                        className="img-circle img-responsive"
                        alt="profile"
                    />
                </div>
                <div className="col-xs-10 col-md-11">
                    <div>
                        <div className={styles['mic-info']}>
                            By: {comment.user} on 2 Aug 2013
                        </div>
                    </div>
                    <div className={styles['comment-text']}>
                        {comment.content}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CommentCard;
