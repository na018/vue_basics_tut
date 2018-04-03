<template>
  <v-card class="mt-5 user-admin mw-900 center pa-3">
    <m-user-card :user="activeUser" :user-name="activeUser.userName"></m-user-card>
    <v-divider></v-divider>
    <v-layout wrap pa-3>
      <m-activate-user v-for="(user, key, index) in allUsers"  v-if="key !== activeUser.userName"
                       :user="user" :userName="key"
                       :key="user._id" class="hover-user"
      ></m-activate-user>

    </v-layout>
  </v-card>

</template>

<script>
  import {mapGetters} from 'vuex'
  import MUserCard from "../userAdminComponents/UserCard"
  import MActivateUser from "../userAdminComponents/activateUser"

  export default {
    components: {
      MActivateUser,
      MUserCard},
    name: "m-user-admin",
    computed: {
      ...mapGetters(['allUsers', 'activeUser']),
    },
  }
</script>
<style lang="scss">
  .user-admin{

  }
  .mw-900{
    max-width: 900px;
  }
  .center {
    margin:auto;
  }
  .hover-user:hover {
    box-shadow: inset 0 0 30px #eff6f5;
  }
</style>

