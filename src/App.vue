<template>
  <div id="app">
    <button @click="onclick">didiid</button>
    <vue-tree :treeData="treeData" @dotclick="dotClick" ref="test">
      <template v-slot:default="data">
        <div class="box-content" :style="`height: ${data.nodeData.hheight}px`"></div>
      </template>
    </vue-tree>
  </div>
</template>

<script>
let id = 0
import vueTree from './components/vueTree.vue'
export default {
  name: 'App',
  components: {
    vueTree
  },
  methods: {
    dotClick(data) {
      if (data.level === 1) {
        this.$set(data, 'isOpen', !data.isOpen)
        const list = []
        list.push({ id: id++,level: data.level + 1,hheight: 300,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        this.$set(data, 'children', list)
      } else if (data.level === 2) {
        this.$set(data, 'isOpen', !data.isOpen)
        const list = []
        list.push({ id: id++,level: data.level + 1,hheight: 200,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        this.$set(data, 'children', list)
      } else if (data.level == 3) {
        this.$set(data, 'isOpen', !data.isOpen)
        const list = []
        list.push({ id: id++,level: data.level + 1,hheight: 500,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        list.push({ id: id++,level: data.level + 1,hheight: 100,isOpen: true,children: []})
        this.$set(data, 'children', list)
      } 
      else {
        console.log('点击')
      }
    },
    onclick() {
      console.log(this.$refs)
    }
  },
  data() {
    return {
      treeData: {
        id: id++,
        name: '1',
        level: 1,
        hheight: 100,
        isOpen: true,
        children: []
      }
    }
  }
}
</script>

<style>
.box-content{
  width: 100px;
  height: 100px;
  background: green;
}
.box-content-big{
  width: 100px;
  background: green;
}
</style>
