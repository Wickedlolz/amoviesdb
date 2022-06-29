import './CommentForm.css';

function CommentForm() {
    return (
        <form>
            <div className="comment-card">
                <div className="row">
                    <div className="col-2">
                        <img
                            src="https://i.imgur.com/xELPaag.jpg"
                            width="70"
                            className="rounded-circle mt-2"
                            alt="avetar"
                        />
                    </div>
                    <div className="col-10">
                        <div className="comment-box ml-2">
                            <h4>Add a comment</h4>

                            <div className="comment-area">
                                <textarea
                                    className="form-control"
                                    placeholder="what is your view?"
                                    name="content"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="comment-btns mt-2">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="pull-right">
                                            <button className="btn btn-success send btn-sm">
                                                Send{' '}
                                                <i className="fa fa-long-arrow-right ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
