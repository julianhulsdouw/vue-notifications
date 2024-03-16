import { ref} from 'vue';

interface Notification {
  duration?: number;
  forceClose?: boolean;
  id?: string;
  message?: string;
  title?: string;
}

const notifications = ref<Notification[]>([]);

const handleAdd = (notification: Notification) => {
    const timeout = notification.duration || 3000;

    notifications.value.push({
        id: window.crypto.randomUUID(),
        ...notification,
    })

    if (notification.forceClose) {
        return;
    }
    
    setTimeout(() => {
        notifications.value.shift();
    }, timeout);
}

const handleClose = (notification: Notification) => {
  notifications.value = notifications.value.filter((item) => item.id !== notification.id);
}

const useNotifications = () => {
    const notify = (notification: Notification) => {
        handleAdd(notification);
    };
    
    return {
        handleClose,
        notify,
        notifications,
    };
}

export default useNotifications;
