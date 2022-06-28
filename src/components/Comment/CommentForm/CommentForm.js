import './CommentForm.css';

function CommentForm() {
    return (
        <div class="comment-card">
            <div class="row">
                <div class="col-2">
                    <img
                        src="https://i.imgur.com/xELPaag.jpg"
                        width="70"
                        class="rounded-circle mt-2"
                        alt="avetar"
                    />
                </div>

                <div class="col-10">
                    <div class="comment-box ml-2">
                        <h4>Add a comment</h4>

                        <div class="comment-area">
                            <textarea
                                class="form-control"
                                placeholder="what is your view?"
                                rows="4"
                            ></textarea>
                        </div>

                        <div class="comment-btns mt-2">
                            <div class="row">
                                <div class="col-6">
                                    <div class="pull-right">
                                        <button class="btn btn-success send btn-sm">
                                            Send{' '}
                                            <i class="fa fa-long-arrow-right ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;
