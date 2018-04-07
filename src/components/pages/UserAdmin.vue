<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <v-layout wrap pa-3>
       <m-user-card :user="onePerson"></m-user-card>
        </v-layout>
    </v-card>
</template>

<script>


    import MUserCard from "../userAdminComponents/UserCard"

    export default {

        components: {MUserCard},
        name: "m-user-admin",
        data() {
            return {
                onePerson: {
                    firstName: "Hero",
                    id: 3,
                    img: "/static/img/avatars/hero.png",
                    lastName: "Hunter",
                    userName: "heroHunter",
                }
            }
        },
    }
</script>



