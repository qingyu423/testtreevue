<template>
  <div id="app">
    <vue-tree isRoot :treeData="treeData" />
  </div>
</template>

<script>
import vueTree from './components/vueTree.vue'
export default {
  name: 'App',
  components: {
    vueTree
  },
  data() {
    return {
      treeData: {
        id: 1,
        name: 'zs',
        children: [
          {id: 2, name: 'ww', children: [
            { id: 5, name: 'ddd', children: []},
            { id: 6, name: 'ddd', children: []},
            { id: 7, name: 'ddd', children: []},
            { id: 8, name: 'ddd', children: []}
          ]},
          {id: 3, name: 'zl', children: []},
          {id: 4, name: 'qq', children: []},
        ]
      }
    }
  }
}
</script>

<style>
</style>
