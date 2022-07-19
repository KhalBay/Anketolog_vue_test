<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
  button {
    padding: 5px 25px;
    background: lightgray;
    color: grey;
    border: 1px solid;
    border-radius: 25px;
    cursor: pointer;
    width: fit-content;
    transition: .5s;
  }

  button:hover {
    background: white;
  }
</style>
