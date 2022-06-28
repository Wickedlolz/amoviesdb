function CommentCard({ comment }) {
    return (
        <li class="list-group-item">
            <div class="row">
                <div class="col-xs-2 col-md-1">
                    <img
                        src="/images/programmer.png"
                        class="img-circle img-responsive"
                        alt=""
                    />
                </div>
                <div class="col-xs-10 col-md-11">
                    <div>
                        <div class="mic-info">
                            By: {comment.user} on 2 Aug 2013
                        </div>
                    </div>
                    <div class="comment-text">{comment.content}</div>
                </div>
            </div>
        </li>
    );
}

export default CommentCard;
