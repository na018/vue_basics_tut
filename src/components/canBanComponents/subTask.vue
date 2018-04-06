<template>
  <v-layout class="subTask py-2">
    <v-flex xs6>
      <v-checkbox :label="name" :input-value="subTask.status === 'done'" :color="color"
                  class="regular" @change="updateStatus()"></v-checkbox>
    </v-flex>
    <v-flex xs6 v-if="(subTask.responsible.length===0 || activateSelect)">
      <v-select single-line="" hide-details="" autocomplete="" @blur="" :value="subTask.responsible"
                @change="val => updateResponsible(val) "
                :items="userNames" class="elevation-1 pl-1 pt-0 small" content-class="regular"
                label="Assign to..." dense></v-select>
    </v-flex>
    <v-flex v-else @click="activateSelect=true" class="pointer">
      <v-list-tile avatar :title="subTask.responsible" dense class="right">
        <v-list-tile-avatar>
          <img :src="userByFullName[subTask.responsible] ? userByFullName[subTask.responsible].img : ''"
               class="elevation-3 mb-3">
        </v-list-tile-avatar>
      </v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "m-sub-task",
    props: {
      subTask: {
        type: Object,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: 'light-blue lighten-2',
      },
      itemId: {
        type: Number,
        required: true,
      },
    },
    computed: {
      ...mapGetters(['allUsers']),
      userNames() {
        let names = []
        let users = this.allUsers
        Object.keys(users).forEach(key => names.push(users[key].firstName + ' ' + users[key].lastName))
        return names
      },
      userByFullName() {
        let usersObj = {}
        let users = this.allUsers
        Object.keys(users).forEach(key => {
          let fullName = users[key].firstName + ' ' + users[key].lastName
          usersObj[fullName] = users[key]
        })
        return usersObj
      },
    },
    data() {
      return {
        activateSelect: false,
      }
    },
    methods: {
      ...mapActions(['setCard', 'putCard']),
      updateStatus() {
        let newStatus = 'done'
        if (this.subTask.status === newStatus) newStatus = ''
        this.setCard({
          obj: this.subTask,
          prop: 'status',
          val: newStatus,
          cb2: newCard => {
            this.putCard({card: newCard})
          },
          id: this.itemId,
        })

      },
      updateResponsible(val) {
        this.setCard({
          obj: this.subTask,
          prop: 'responsible',
          val,
          cb2: newCard => {
            this.putCard({card: newCard})
          },
          id: this.itemId,
        })
        this.activateSelect = false
      },
    },
  }
</script>


