<template>
  <select
    class="select"
    name="head"
    @input="user.head = $event.target.value"
  >
    <option value=""></option>
    <option v-for="n in users" :key="n.id" :value="n.id">{{ n.name }}</option>
  </select>
</template>

<script>
export default {
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      user: {
        name: '',
        tel: '',
        head: '',
      }
    }
  },
  computed: {
    users() {
      return (function getNested(arr) {
        return (Array.isArray(arr) ? arr : []).reduce((acc, n) => (
          acc.push(n, ...getNested(n.children)),
            acc
        ), []);
      })(this.elements);
    },
  },
}
</script>

<style scoped>
.select {
  height: 27px;
  width: 73%;
}
</style>
