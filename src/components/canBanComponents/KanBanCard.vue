<template>
      <v-card class="ma-2 move" @click="setCard({obj:item, prop: 'fixed', val: !item.fixed})">
        <v-layout class="kanban-card">
          <v-flex :class="bgColor" class="mw-10 card-color-indicator"></v-flex>
          <v-flex>
            <v-card-title class="grey pa-0 grey--text text--darken-2 lighten-2 pl-3">
              <!---icon color="white">brush</v-icon-->
              <span>{{item.title}}</span>
              <v-spacer></v-spacer>
              <span class="px-2 grey--text" :class="bgColor">{{boardAbbr +'-' +item.id}}</span>
            </v-card-title>
            <v-card-text :class="item.status === 'done' ? 'grey': ''">
              <v-container v-show="item.status !== 'done'" class="grey lighten-4 kanban-card-description" v-html="item.description"></v-container>
              <v-container v-show="item.status === 'inProgress'" class="no-details">
                <m-sub-task v-for="(subTask, key) in item.subTasks" :key="key" :subTask="subTask" :name="key" @updateCard="putCard({card: item})" :itemId="item.id"></m-sub-task>
              </v-container>
              <v-icon class="right trashBtn" title="delete card" @click="deleteCard({id: item.id})">delete</v-icon>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
</template>

<script>
  import {mapActions} from 'vuex'
  import MSubTask from "./subTask"
  export default {
    components: {MSubTask},
    name: "m-kan-ban-card",
    props: {
      item: {
        type: Object,
        required: true,
      },
      boardAbbr: {
        type: String,
        required: true
      }
    },
    computed: {
      bgColor() {
        switch (this.item.taskType) {
          case 'feature':
            return 'light-blue text--lighten-3'
          case 'bug':
            return 'red darken-1 text--lighten-2'
          default:
            return 'grey lighten-1 text--lighten-4'
        }
      },
    },
    methods: {
      ...mapActions(['setCard', 'putCard', 'deleteCard']),
    },
  }
</script>

<style lang="scss">
  .mw-10 {
    max-width: 10px !important;
    min-width: 10px;
  }
  .grey.card-color-indicator{
    box-shadow: inset 4px 1px 4px grey;
  }
  .red.card-color-indicator{
    box-shadow: inset 4px 1px 4px #930000;
  }
  .light-blue.card-color-indicator{
    box-shadow: inset 4px 1px 4px blue;
  }
  .kanban-card{
    box-shadow: inset 0 0 8px #bdbdbd;
  }
  .kanban-card-description {
    font-style: italic;
    font-size: 13px;
    color: grey;
  }
  .no-details .input-group__details{
    display: none;
  }
  i.icon.trashBtn {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.15);
    font-size: 20px;
    margin-bottom: 4px;
    margin-right: -15px;
    padding-bottom: 0;
    &:hover{
      color: rgba(203, 0, 0, 0.53);
    }
    &:active{
      margin-top: -1px;
      padding-bottom: 1px;
    }
  }
</style>
