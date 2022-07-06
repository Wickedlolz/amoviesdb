import { useContext } from 'react';
import { NotificationContext } from '../../contexts/Notification';
import { ToastContainer, Toast } from 'react-bootstrap';

function Notification() {
    const { notification, clearNotification } = useContext(NotificationContext);

    if (notification.show == false) {
        return;
    }

    return (
        <ToastContainer className="p-3" position="top-end">
            <Toast>
                <Toast.Header onClick={clearNotification} closeButton={true}>
                    <strong className="me-auto">{notification.type}</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>{notification.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Notification;
