<template>
  <div>
    <div class="wrap">
      <div class="element-name">{{ user.name }}</div>
      <div class="element-tel">{{ user.tel }}</div>
    </div>
    <User
      class="child"
      v-for="child in user.children"
      v-bind:user="child"
      :key="child.id"
      :parentItem="user"
    />
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true
    },
    parentItem: {
      required: false
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
}

.child > div {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.child {
  width: 95%;
  margin: 0 0 0 auto;
}

.child .child {
  flex-wrap:wrap;
  position: relative;
}

.child .child:not(:nth-of-type(-n+2))::before {
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
  border-right: 1px solid black;
}

.child .element-tel {
  width: 398px;
  flex-shrink: 0;
  box-sizing: border-box;
}

.element-name, .element-tel {
  padding: 5px 10px;
  background: white;
  width: 50%;
}
</style>
