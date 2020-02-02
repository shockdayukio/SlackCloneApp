<template>
  <div class="container">
    <div class="chats-container">
      <Message />
      <Message />
    </div>
  </div>
</template>

<script>
import Message from "~/components/Message"

export default {
  components: {
    Message
  }  
}
</script>

<style scoped>
.chats-container {
  padding: 16px;
}
</style>