<template>
  <div class="navigation">
    <m-left-nav :clipped="clipped" :miniVariant="miniVariant" :drawer="drawer"></m-left-nav>
    <m-top-nav  :clipped="clipped" :mini-variant="miniVariant" :drawer="drawer" :title="title"
               @update:clipped="clipped = !clipped" @update:toolbarSideIcon="drawer = !drawer; miniVariant = false"
               @update:miniVariant="miniVariant = !miniVariant; drawer = true" @update:rightDrawer="rightDrawer= !rightDrawer"></m-top-nav>

    <m-right-nav :right="isRight" :right-drawer="rightDrawer" @update:right="rightDrawer = !rightDrawer"></m-right-nav>
  </div>
</template>

<script>
  import MLeftNav from "./components/leftNav"
  import MRightNav from "./components/rightNav"
  import MTopNav from "./components/topNav"

  export default {
    components: {
      MTopNav,
      MRightNav,
      MLeftNav},
    name: "m-nav",
    props: {
      title: {
        type: String,
        default: 'Welcome to my KanBan Board'
      }
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
        }],
        miniVariant: false,
        isRight: true,
        rightDrawer: false,
      }
    },
  }
</script>

