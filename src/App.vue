<script setup lang="ts">
import useNotifications from '/src/composables/notifications';

const { notifications, notify, handleClose } = useNotifications();
</script>

<template>
  <div class="notifications">
    <TransitionGroup name="notifications-animate">
      <button @click="handleClose(notification)" type="button" v-for="notification in notifications" :key="notification.id" class="notification-item">
        {{ notification.title }}

    <p>{{ notification.message }}</p>
        {{  notification.id }}
      </button>
    </TransitionGroup>
  </div>

  <button
    @click="notify({
      title: 'Notification',
    })"
    type="button"
  >
    Add notification
  </button>
</template>

<style scoped>
.notifications-animate-enter-active,
.notifications-animate-leave-active {
  transition: all 0.3s ease;
}
.notifications-animate-enter-from,
.notifications-animate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
