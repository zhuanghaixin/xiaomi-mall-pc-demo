<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      age: 30
    };
  },
  mounted() {
    let url =
      "http://api.jirengu.com/readme2html.php?url=https://github.com/jirengu/server-mock";
    axios.get(url).then(() => {});
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
