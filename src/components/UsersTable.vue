<template>
  <div class="table">
    <div class="element">
      <div class="wrap">
        <div class="table-name">Имя</div>
        <div class="table-tel">Телефон</div>
      </div>
    </div>
    <User
      class="element"
      v-for="user in elements"
      :key="user.id"
      :id="user.id"
      :user="user"
    >
    </User>
  </div>
</template>

<script>
import User from "./User";
export default {
  components: {User},
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  methods: {}
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

.element .wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
}

.element:first-child {
  border-top: 1px solid black;
  text-align: center;
  font-weight: 600;
}

.element-name, .table-name {
  border-right: 1px solid black;
}

.element-name, .element-tel, .table-name, .table-tel {
  padding: 5px 10px;
  width: 50%;
  background: white;
}
</style>
