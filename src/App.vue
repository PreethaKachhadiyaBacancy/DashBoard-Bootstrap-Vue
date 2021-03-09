<template>
  <div id="app">
    <div>
      <div class="sideBar">
        <sidebar @sidebarChange="changeRouterView"></sidebar>
      </div>
      <div class="router" :style="{ width: routerWidth }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Sidebar },
  name: "App",
  data() {
    return {
      routerWidth: '95.8%',
    }
  }, 
  methods: {
    changeRouterView(sidebarIsActive) {
      if(sidebarIsActive) {
        this.routerWidth = '82%';
      }
      else {
        this.routerWidth = '95.8%';
      }
    }
  }

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 30px; */
  display: block;
  height: 100%;
  background-color: lightgray;
}

.sideBar {
  width: 16%;
  margin: 0;
  padding: 0
}

.router {
  /* width: 84%;  */
  margin: 0;
  padding: 0;
  float: right;
  background-color: lightgray;
  /* display: inline-flex; */
  /* margin-left: 100px; */
 } 

router-view {
  margin: 0;
  padding: 0
}
</style>
