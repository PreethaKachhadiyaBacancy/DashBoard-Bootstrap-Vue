<template>
  <b-sidebar visible no-close-on-route-change no-header :width="sidebarWidth">
    <b-button
      id="hamburger"
      squared
      variant="light"
      style="float: right"
      @click="changeSideBar"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </b-button>
    <div v-if="sidebarIsActive" id="sideBar">
      <nav class="mb-2">
        <b-nav vertical>
          <b-nav-item
            ><router-link to="/dashboard">Dashboard</router-link></b-nav-item
          >
          <b-nav-item><router-link to="/maps">Maps</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/userManagement"
              >User Management</router-link
            ></b-nav-item
          >
        </b-nav>
      </nav>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebarWidth: "4.2%",
      sidebarIsActive: false
    };
  },
  methods: {
    changeSideBar() {
      var x = document.getElementById('hamburger');
      if (this.sidebarWidth == "4.2%") {
        this.sidebarWidth = "18%";
        this.sidebarIsActive = true;
        x.classList.add('change');
        //  x.classList.toggle("change");
        // x.classList.add("change");
      } else {
        this.sidebarWidth = "4.2%";
        this.sidebarIsActive = false;
        x.classList.remove('change');
        // x.className -= 'change';
      }
        this.$emit('sidebarChange', this.sidebarIsActive);
    },    
  }
};
</script>

<style scoped>

#sideBar {
  margin-top: 40%;
}

.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-9px, 7px);
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  transform: rotate(45deg) translate(-8px, -8px);
}

/* b-button {
  border-radius: 0;
} */
</style>
