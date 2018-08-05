<template>
  <div class='app'>
   <div class="nav">
    <v-nav res="nav"></v-nav>
   </div>
   <div class="container">
      <v-header></v-header>
        <keep-alive>
          <router-view >
          </router-view >
       </keep-alive>
          
   </div>
  </div>
</template>

<script>
import vNav from "./components/nav/vNav";
import vHeader from "./components/header/vHeader";
import {mapActions} from 'vuex';
export default {
  name: "App",
  data() {
    return {};
  },
  methods:{
      ...mapActions(["commit_ecc"]),
  },
  components: {
    vNav,
    vHeader
  },
  created() {
    this.commit_ecc();
  }
};
</script>
<style>
.app {
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.nav {
  width: 260px;
  float: left;
  height: 100%;
  background: #474747;
}
.container {
  background: #eee;
  overflow: hidden;
  font-size: 16px;
}
</style>