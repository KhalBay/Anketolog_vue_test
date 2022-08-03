<template>
  <div>
    <div class="table" v-if="elements.length > 0">
      <TreeItem
        class="element"
        v-for="item in elements"
        :key="item.id"
        :id="item.id"
        :item="item"
      >
      </TreeItem>
    </div>
    <div v-else>
      <img src="~@/assets/null.jpg" class="secret" alt="ты чаво наделал">
    </div>
  </div>
</template>

<script>
import TreeItem from "./TreeItem";
export default {
  components: {TreeItem},
  props: {
    elements: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
}

.element {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}

.element:not(:last-child):before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 1px;
  background-color: black;
}

.element:first-child {
  border-top: 1px solid black;
}

.secret {
  width: 600px;
  height: 600px;
  object-fit: cover;
}
</style>
