<template>
  <div>
    <div class="wrap">
      <div class="wrap-left">
        <div class="element-ico-folder" v-if="item.type === 'folder'"></div>
        <div class="element-ico-file" v-else></div>
        <div class="element-name">{{ item.name }}</div>
      </div>
      <div class="wrap-right">
        <button class="btn-edit" @click="editItem(item)"></button>
        <button class="btn-del" @click="delItem(item)"></button>
      </div>
    </div>
    <TreeItem
      class="child"
      v-for="child in item.children"
      v-bind:item="child"
      :key="child.id"
      :parentItem="item"
      :id="child.id"
    />
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'TreeItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    parentItem: {
      required: false
    }
  },
  methods: {
    ...mapMutations(["editItem", "delItem"]),
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
  align-items: center;
  background: white;
  height: 30px;
}

.wrap-left, .wrap-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.child > div {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
}

.child {
  width: 95%;
  margin: 0 0 0 auto;
  position: relative;
}

.child .child {
  flex-wrap: wrap;
  position: relative;
}

.child::before {
  content: '';
  position: absolute;
  display: block;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: black;
}

.element-name {
  padding: 5px;
  width: 100%;
}

.element-ico-folder {
  background: url('~@/assets/folder.svg') no-repeat center;
  width: 30px;
  height: 30px;
  display: block;
  flex-shrink: 0;
}

.element-ico-file {
  background: url('~@/assets/file.svg') no-repeat center;
  width: 30px;
  height: 20px;
  display: block;
  flex-shrink: 0;
}

.btn-edit {
  background: url('~@/assets/edit.svg') no-repeat center;
  background-size: cover;
  width: 15px;
  height: 15px;
  border: none;
  cursor: pointer;
  margin: 0 30px 0 0;
}
.btn-del {
  background: url('~@/assets/del.svg') no-repeat center;
  background-size: cover;
  width: 15px;
  height: 15px;
  border: none;
  cursor: pointer;
  margin: 0 10px 0 0;
}
</style>
