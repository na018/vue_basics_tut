<template>
  <v-navigation-drawer class="left-nav" :mini-variant="miniVariant" :clipped="clipped" :value="drawer"
                       persistent enable-resize-watcher fixed app>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 transparent" v-if="activeUser">
        <v-list-tile avatar>
          <v-list-tile-avatar >
            <img :src="activeUser.img">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-sub-title> {{activeUser.userName}}</v-list-tile-sub-title>
            <v-list-tile-title>
              {{activeUser.firstName + ' ' + activeUser.lastName}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <m-left-nav-links></m-left-nav-links>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters} from 'vuex'
  import MLeftNavLinks from "./leftNavLinks"

  export default {
      components: {MLeftNavLinks},
      name: "m-left-nav",
    props: {
      clipped: {
        type: Boolean,
        required: true,
      },
      miniVariant: {
        type: Boolean,
        required: true,
      },
      drawer: {
        type: Boolean,
        required: true,
      },
    },
    computed: {
      ...mapGetters(['activeUser']),

    },
    data() {
      return {
        items: [
          {
            icon: 'supervisor_account',
            title: 'User Admin',
            link: '/users'
          },
          {
            icon: 'dashboard',
            title: 'Board',
            link: '/board'
          },
        ],
        activeColor: this.$router.currentRoute.fullPath=== '/' ? 'list__tile--active' : ''
      }
    },
    methods: {

      setInactive(){
        this.activeColor = ''
      }
    }
  }
</script>
<style lang="scss">
  .left-nav {
    box-shadow: inset 3px 0px 39px #7d7d7d;
    .link-list{
      margin-top: 4vh;
    }
    .list__tile__sub-title{
      font-style:italic;
    }
    .list__tile--active{
      background-color: #007ae2;
      i,.list__tile__title{
        color: white !important;
      }
      &:hover.list__tile--link{
        background-color: #007ae2;
        cursor:default;
      }

    }
  }

</style>
