<template>
  <v-app>
    <m-nav></m-nav>
    <v-content>
      <router-view/>
    </v-content>
    <m-footer></m-footer>
  </v-app>
</template>

<script>
import MNav from "./components/nav/Nav"
import MFooter from "./components/footer/Footer"
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    MFooter,
    MNav},
  methods: {
    ...mapActions(['getCards', 'getAllUsers']),
  },
  created() {
    this.getCards({id: 1})
    this.getAllUsers()
  },
}
</script>
