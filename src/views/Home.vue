<template>
  <div class="home">
    {{ ceshi }}
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ceshi () {
      return this.$store.getters.getCeshi
    }
  }
}
</script>
