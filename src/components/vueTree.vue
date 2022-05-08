<template>
  <div class="root-tree">
    <div class="root-tree-header" :style="`padding-top:${isMax - boxHeight}px;`">
      <div class="header-box" ref="headerBox">
        <slot v-bind:nodeData="treeData"></slot>
        <div class="righ-line"></div>
        <img v-show="treeData.isOpen" class="line-dot" src="../assets/add.png" alt="" @click="handleClick">
        <img v-show="!treeData.isOpen" class="line-dot" src="../assets/cut.png" alt="" @click="handleClick">
      </div>
    </div>
    <div class="root-tree-content" v-if="treeData.children" v-show="!treeData.isOpen">
      <vue-tree-item v-for="(item, index) in treeData.children" :key="item.id" :treeData="item" :index="index + 1" :indexTotal="treeData.children.length">
        <template v-slot:default="data">
          <slot v-bind:nodeData="data.nodeData"></slot>
        </template>
      </vue-tree-item>
    </div>
  </div>
</template>

<script>
import vueTreeItem from './vueTreeItem.vue'
export default {
  components: {
    vueTreeItem
  },
  data() {
    return {
      isTree: true,
      isMax: 0,
      boxHeight: 0
    }
  },
  created() {
  },
  mounted() {
    this.boxHeight = this.$refs.headerBox.clientHeight / 2
    this.isMax = this.boxHeight
  },
  methods: {
    handleClick() {
      this.$emit('dotclick', this.treeData)
    }
  },
  props: {
    treeData: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.root-tree{
  display: flex;
}
.header-box{
  position: relative;
}
.root-tree-header{
  flex-shrink: 0;
  padding-right: 40px;
}
.righ-line{
  position: absolute;
  width: 40px;
  height: 10px;
  background: rgb(85, 84, 84);
  right: -40px;
  top: 50%;
  margin-top: -5px;
}
.line-dot{
  width: 20px;
  height: 20px;
  position: absolute;
  right: -55px;
  top: 50%;
  margin-top: -10px;
  z-index: 100;
  cursor: pointer;
}
</style>
