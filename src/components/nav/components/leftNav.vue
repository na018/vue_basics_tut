<template>
  <v-navigation-drawer class="left-nav" :mini-variant="miniVariant" :clipped="clipped" :value="drawer"
                       persistent enable-resize-watcher fixed app>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 transparent">
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
    <v-list class="pt-0 transparent link-list">
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.link"  exactActiveClass :class="item.link === '/board' ? activeColor : ''" @click="setInactive()">
        <v-list-tile-action>
          <v-icon color="indigo">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="blue--text text--lighten-1">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
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
      highlightActive() {
        console.log('this.$router.currentRoute.fullPath')
        console.log(this.$router.currentRoute.fullPath)
        if(this.$router.currentRoute.fullPath=== '/') this.activeColor= 'list__tile--active'
      },
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
