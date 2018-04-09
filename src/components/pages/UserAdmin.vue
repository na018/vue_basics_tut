<template>
    <v-card class="mt-5 user-admin mw-900 center pa-3">
        <v-layout wrap pa-3>
            <m-user-card :user="onePerson"></m-user-card>
            <v-divider></v-divider>
            <!-- todo |KB-3| loop over users Array and display them in <m-activate-user> component -->
            <!-- todo |KB-4| <m-activate-user> emits the event changeActiveUser the activeUser should be updated, but only if it is not already the active User -->
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
                },
                activeUser: {},
                users: []
                // todo |KB-3| define activeUser Object and users Array & delete onePerson
            }
        },
    }
</script>
<style lang="scss">
    .avatarIcon{
        width:auto;
        height:40px;
    }
    .centerElem {
        margin:auto;
    }
    ul.card{
        list-style-type: none;
        color: grey;
        .input-group--text-field{
            padding-top: 0;
        }
        li{
            color: grey;
        }
    }

</style>




