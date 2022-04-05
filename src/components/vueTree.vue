<template>
  <div class="vue-tree">
    <div :class="isRoot ? 'tree-header' : 'tree-content-item'">
        <div class="header-box">
          <span>{{ treeData.name }}</span>
          <div class="right-line">
          </div>
          <img v-show="!treeData.isOpen" class="line-dot" src="../assets/add.png" alt="" @click="dotClick(treeData, true)">
          <img v-show="treeData.isOpen" class="line-dot" src="../assets/cut.png" alt="" @click="dotClick(treeData, false)">
          <div class="left-line" v-if="!isRoot"></div>
        </div>
    </div>
    <div class="tree-content-item-line" v-if="!isRoot && isshow"></div>
    <div class="tree-content" v-if="treeData.children" v-show="treeData.isOpen">
      <vue-tree v-for="(item,index) in treeData.children" :key="item.id" :treeData="item" :isshow="index === treeData.children.length - 1 ? false : true" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueTree',
  props: {
    treeData: {
      type: Object,
      default: function() {
        return {}
      }
    },
    isRoot: {
      type: Boolean,
      default: false
    },
    isshow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dotOpen: {
      get() {
        return this.treeData.isOpen
      },
      set(val) {
        this.$set(this.treeData, 'isOpen', val)
      }
    }
  },
  methods: {
    dotClick(data, val) {
      this.dotOpen = val
    } 
  },
  created() {
    console.log(this.$parent)
  }

}
</script>

<style scoped>
.vue-tree{
  display: flex;
  position: relative;
}
.tree-header{
  flex-shrink: 0;
  padding-right: 40px;
}
.tree-content-item{
  padding: 0 40px 0 50px;
  margin-bottom: 20px;
}
.tree-content-item-line{
  position: absolute;
  width: 10px;
  height: calc(100% + 10px);
  left: 0%;
  top: 45px;
  background: rgb(148, 146, 146);
}
.header-box{
  width: 241px;
  height: 100px;
  position: relative;
  background: green;
}
.left-line{
  position: absolute;
  width: 40px;
  height: 10px;
  background: rgb(148, 146, 146);
  left: -40px;
  top: 50%;
  margin-top: -5px;
}
.right-line{
  position: absolute;
  width: 40px;
  height: 10px;
  background: rgb(148, 146, 146);
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
.tree-content{
  flex-shrink: 0;
}

</style>
