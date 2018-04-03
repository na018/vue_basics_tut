<template>
  <v-flex lg6 xs12>
  <v-layout>
    <v-flex xs8>
      <m-user-card :user="user" :userName="userName"></m-user-card>
    </v-flex>
    <v-flex xs4 mt-2 mr-1 @click="setActive">
      <v-btn>set active</v-btn>
    </v-flex>
  </v-layout>
  </v-flex>
</template>

<script>
  import MUserCard from "./UserCard"
  import {mapActions} from 'vuex'

  export default {
    components: {MUserCard},
    name: "m-activate-user",
    props: {
      user: {
        type: Object,
        required: true,
      },
      userName: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions(['setActiveUser']),
      setActive() {
        this.setActiveUser({
          user: {
            userName: this.userName,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            img: this.user.img
          },
        })
      },
    },
  }
</script>

