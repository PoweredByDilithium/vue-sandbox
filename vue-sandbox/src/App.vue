<template>
  <div id="app">
    <message> Hello World</message>
    <message> Hello World again</message>
  </div>
</template>

<script>
import Message from "./components/Message.vue";
export default {
  name: 'app',
  components : {Message},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
