<template>
  <v-flex xs12 class="elevation-2 ma-2" :class="'lg'+12/width">
    <h3 class="pl-3 mt-2">{{status === 'inProgress' ? 'In Progress' : status}}</h3>
    <v-btn icon v-if="status === 'todo' && !showNewTask" @click="showNewTask = true">
      <v-icon>add</v-icon>
    </v-btn>
    <m-kan-ban-new-inline-task v-if="status === 'todo' &&showNewTask"
                               @disableNewTask="showNewTask=false"></m-kan-ban-new-inline-task>
    <draggable class="elevation-1 full-height" element="v-card" v-model="list" :options="{group}" :move="onMove"
               @change="val => changeOrder(val)" @start="isDragging=true"
               @end="val => {isDragging=false; putCardLocal()}">
      <m-kan-ban-card @click="activeCard = item" :item="item" v-for="(item, index) in list" :key="index"
                      :boardAbbr="activeBoard.abbr"></m-kan-ban-card>
    </draggable>
  </v-flex>
</template>

<script>
  import draggable from 'vuedraggable'
  import MKanBanCard from "./KanBanCard"
  import {mapGetters, mapActions} from 'vuex'
  import MKanBanNewInlineTask from "./KanBanNewInlineTask"

  export default {
    components: {
      MKanBanNewInlineTask,
      MKanBanCard, draggable,
    },
    name: "m-kan-ban-column",
    props: {
      status: {
        type: String,
        required: true,
      },
      group: {
        type: String,
        required: true,
      },
      activeBoard: {
        type: Object,
        required: true,
      },
      width: {
        type: Number,
        default: 3,
      },

    },
    computed: {
      ...mapGetters(['cardsByStatus', 'cardsById']),
      list: {
        get() {
          return this.cardsByStatus[this.status]
        },
        set(val) {

          this.setCard({
            obj: this.cardsByStatus,
            prop: this.status,
            val,
            cb2: newColumn => {

            },
          })

        },
      },
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        this.$nextTick(() => {
          this.delayedDragging = false
        })
      },
    },
    data() {
      return {
        showNewTask: false,
        draggedElement: {},
        activeCard: {},
      }
    },
    methods: {
      ...mapActions(['setCard', 'updateStatus', 'updateColumn', 'putCard']),
      onMove({relatedContext, draggedContext}) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        if (draggedContext.index !== draggedContext.futureIndex) {
          this.draggedElement = draggedContext.element

          /* console.log('relatedElement')
           console.log(relatedContext)
           console.log(draggedContext)*/
        }

        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      changeOrder(item) {
        if (item.added) {
          this.updateStatus()
          this.putCard({card: item.added.element})
        }
      },
      putCardLocal() {
        console.log('this.activeCard')
        console.log(this.activeCard)
        //this.putCard({card: this.draggedElement})
      },
    },
  }

</script>
<style>
  .move {
    cursor: move;
  }

  .full-height {
    height: 100% !important;
  }
</style>
