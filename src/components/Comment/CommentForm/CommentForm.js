import styles from './CommentForm.module.css';
import { ArrowRight } from 'react-bootstrap-icons';

function CommentForm({ onSubmitCommentFormHandler, avatar }) {
    return (
        <form onSubmit={onSubmitCommentFormHandler}>
            <div className={styles['comment-card']}>
                <div className="row">
                    {/* <div className="col-2">
                        <img
                            src={avatar}
                            width="70"
                            className="rounded-circle mt-2"
                            alt="avetar"
                        />
                    </div> */}
                    <div className="col-10">
                        <div className={styles['comment-box'] + ' ml-2'}>
                            <h4>Add a comment</h4>

                            <div className={styles['comment-area']}>
                                <textarea
                                    className={styles['form-control']}
                                    placeholder="what is your view?"
                                    name="content"
                                    cols="50"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="mt-2">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="pull-right">
                                            <button
                                                className={
                                                    'btn btn-success ' +
                                                    styles.send +
                                                    ' btn-sm'
                                                }
                                            >
                                                Send <ArrowRight />
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
