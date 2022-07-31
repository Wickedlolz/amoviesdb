import { useForm } from 'react-hook-form';
import { AlertMessage } from '../../Common/AlertMessage';
import styles from './CommentForm.module.css';
import { SendFill } from 'react-bootstrap-icons';

function CommentForm({ onSubmitCommentFormHandler }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
    } = useForm();

    const onSubmit = (data) => {
        onSubmitCommentFormHandler(data.content);
        resetField('content');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['comment-card']}>
                <div className="row">
                    <div className="col-10">
                        <div className={styles['comment-box'] + ' ml-2'}>
                            <h4>Add a comment</h4>

                            <div className={styles['comment-area']}>
                                {errors.content?.type === 'required' && (
                                    <AlertMessage
                                        msg={'Comment field is empty.'}
                                    />
                                )}

                                {errors.content?.type === 'minLength' && (
                                    <AlertMessage
                                        msg={
                                            'Comment must be at least 3 characters long.'
                                        }
                                    />
                                )}
                                <textarea
                                    className={styles['form-control']}
                                    placeholder="what is your view?"
                                    name="content"
                                    cols="50"
                                    rows="4"
                                    {...register('content', {
                                        required: true,
                                        minLength: 3,
                                    })}
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
                                                Send <SendFill />
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
