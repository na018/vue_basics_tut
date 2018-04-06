<template>
  <v-card class="mt-5 user-admin mw-900 center pa-3">
    <m-user-card :user="activeUser" :userName="activeUser.userName"></m-user-card>
    <v-divider></v-divider>
    <v-layout wrap pa-3>
<!--      {{Object.keys(allUsers)}}<br>
      {{allUsers.love}}<br>-->
      {{onePerson}}
      {{onePerson.firstName}}
      <ul>
        <li><v-text-field type="Number" v-model="onePerson.id" ></v-text-field></li>
        <li><v-text-field v-model="onePerson.userName" ></v-text-field></li>
        <li><v-text-field v-model="onePerson.firstName" ></v-text-field></li>
        <li><v-text-field v-model="onePerson.lastName" ></v-text-field></li>
        <li><img :src="onePerson.img" ></li>
      </ul>

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
  import MActivateUser from "../userAdminComponents/ActivateUser"

  export default {
    components: {
      MActivateUser,
      MUserCard},
    name: "m-user-admin",
    computed: {
      ...mapGetters(['allUsers', 'activeUser']),
    },
    data() {
      return {
        onePerson: { "userName": "love", "id": 4, "firstName": "Ada", "lastName": "Lovelace", "img": "/static/img/avatars/avatar-female-2.png" }
      }
    }
  }
</script>


