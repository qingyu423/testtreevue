<template>
  <div class="item-tree">
    <div class="item-tree-header" :style="`padding-top:${firstlineHeight}px;`">
      <div class="header-box" ref="headerBox">
        <slot v-bind:nodeData="treeData"></slot>
        <div class="left-line"></div>
        <div class="right-line"></div>
        <img v-show="treeData.isOpen" class="line-dot" src="../assets/add.png" alt=""  @click="handleClick">
        <img v-show="!treeData.isOpen" class="line-dot" src="../assets/cut.png" alt=""  @click="handleClick">
      </div>
    </div>
    <template v-if="indexTotal > 1">
      <div class="box-right-line-first" v-if="index === 1" :style="`height: calc(100% - ${firstlineHeight + boxHeight }px);`"></div>
      <div class="box-right-line-last" v-else-if="indexTotal === index" :style="`height:${lastlineHeight}px;`"></div>
      <div class="box-right-line-middle"  v-else></div>
    </template>
    <div class="root-tree-content" v-if="treeData.children"  v-show="!treeData.isOpen">
      <vue-tree-item v-for="(item, index) in treeData.children" :key="item.id" :treeData="item" :index="index + 1" :indexTotal="treeData.children.length">
        <template v-slot:default="data">
          <slot v-bind:nodeData="data.nodeData"></slot>
        </template>
      </vue-tree-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vueTreeItem',
  props: {
    treeData: {
      type: Object,
      default: function() {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    },
    indexTotal: {
      type: Number,
      default: 0
    }
  },
  computed: {
    firstlineHeight() {
      return this.isMax - this.boxHeight
    },
    lastlineHeight() {
      return this.isMax + 5
    }
  },
  methods: {
    handleClick() {
      this.tree.$emit('dotclick', this.treeData)
    }
  },
  created() {
    if (this.$parent.isTree) {
      this.tree = this.$parent
    } else {
      this.tree = this.$parent.tree
    }
  },
  mounted() {
    this.boxHeight = this.$refs.headerBox.clientHeight / 2
    if (this.index === 1) {
      this.isMax = this.boxHeight > this.$parent.boxHeight ?  this.boxHeight : this.$parent.isMax
    } else {
      this.isMax = this.boxHeight
    }
  },
  watch: {
    isMax(newdata) {
      if (newdata > this.$parent.isMax && this.index === 1 ) {
        this.$parent.isMax= newdata
      }
    }
  },
  data() {
    return {
      isMax: 0,
      boxHeight: 0,
      tree: null
    }
  }
}
</script>

<style scoped>
.box-right-line-first{
  width: 10px;
  position: absolute;
  background: red;
  left:0;
  bottom: 0;
}
.box-right-line-middle{
  width: 10px;
  position: absolute;
  height: 100%;
  background: yellow;
  left:0;
}
.box-right-line-last{
  width: 10px;
  position: absolute;
  top: 0;
  background: blue;
  left:0;
}
.item-tree{
  display: flex;
  padding-left: 10px;
  padding-bottom: 40px;
  position: relative;
}
.header-box{
  position: relative;
}
.item-tree-header{
  flex-shrink: 0;
  padding: 0 40px;
}
.left-line{
  position: absolute;
  width: 40px;
  height: 10px;
  background: rgb(85, 84, 84);
  left: -40px;
  top: 50%;
  margin-top: -5px;
}
.right-line{
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