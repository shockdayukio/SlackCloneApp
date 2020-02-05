<template>
  <div class="container">
    <div class="chats-container">
      <message v-for="message in messages" v-bind:key="message.id" :message="message"/>
    </div>
  </div>
</template>

<script>
import Message from "~/components/Message"

export default {
  props: ["messages"],
  components: {
    Message
  },
  mounted () {
    console.log(this.messages)
  }  
}
</script>

<style scoped>
.chats-container {
  padding: 16px;
}
</style>