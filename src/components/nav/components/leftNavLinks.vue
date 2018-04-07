<template>
    <v-list class="pt-0 transparent link-list">
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.link"  exactActiveClass :class="item.link === '/board' ? activeColor : ''"
                     @click="setInactive()">
            <v-list-tile-action>
                <v-icon color="indigo">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="blue--text text--lighten-1">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
    export default {
        name: "m-left-nav-links",
        data() {
            return {
                items: [
                    {
                        icon: 'supervisor_account',
                        title: 'User Admin',
                        link: '/users'
                    },
                    // todo |KB-8| add link to /board with 'dashboard' icon
                ],
                activeColor: this.$router.currentRoute.fullPath === '/' ? 'list__tile--active' : ''
            }
        },
        methods: {
            setInactive() {
                this.activeColor = ''
            },
        },
    }
</script>
