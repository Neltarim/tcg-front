<template>
  <div class="my-6 p-4 bg-primary-light rounded">
    <h2 class="text-white text-xl text-center mb-5">{{ username }}</h2>
    <div class="flex gap-3">
      <SimpleButton class="bg-green" text="start" @click="start()" />
      <SimpleButton v-if="socket && !logged" text="login" @click="login()" />
      <SimpleButton class="bg-red" text="stop" @click="stop()" />
    </div>
    <div v-if="logged" class="flex gap-3 mt-4">
      <SimpleButton text="test" @click="test()" />
    </div>
  </div>
</template>

<script>
import SimpleButton from "./SimpleButton.vue"

export default {
  name: 'SocketPlayer',
  components: { SimpleButton },
  props: { username: String },
  data: () => {
    return {
      socket: null,
      matchMakingURL: 'ws://127.0.0.1:8000/match-maker/',
      logged: false,
    }
  },

  methods: {
    start() {
      if (this.socket) { this.stop(); }

      console.log('Init socket ...')
      this.socket = new WebSocket(this.matchMakingURL)

      this.socket.onclose = function (e) {
        console.log('Socket is closed.');
        console.log(e.reason)
      };
      // Sending the info about the room
      this.socket.onmessage = function (e) {
        let data = JSON.parse(e.data);
        data = data["payload"] || 'no payload';
        let message = data['message'] || 'no message';
        let event = data["event"] || 'no event';
        console.log(event, message)
      };
      
    },
    login() {
      this.logged = false
      const usr = this.username
      this.socket.send(JSON.stringify({
        "event": "LOGIN",
        "message": "",
        "username": usr,
        "password": "qwer1234"
      }));
      console.log('WebSockets connection created.');
      this.logged = true
    },
    stop() {
      if (this.socket) {
        this.socket.close()
        this.socket = null
        this.logged = false 
      } else {
        console.log('Socket already closed.')
      }
    },
    test() {
      this.send({
        "event": "TEST",
        "message": "testing from front"
      })
    },
    send(payload) {this.socket.send(JSON.stringify(payload))},
  },
}
</script>