<template>
  <form @submit.prevent>
    <h2>Редактировать название</h2>
    <label>
      <span class="label-title">Название</span>
      <Input class="label-inpt" type="text" :value="getCurrentElement.name" @input.native="getCurrentElement.name = $event.target.value"/>
    </label>
    <button class="btn-close" @click="closeModal"></button>
  </form>
</template>

<script>
import {mapGetters} from "vuex";
import {mapMutations} from "vuex";
import Input from "./UI/Input";

export default {
  components: {Input},
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  computed: mapGetters(['getCurrentElement']),
  methods: {
    ...mapMutations(["closeModal"])
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
}

form > * {
  width: 100%;
}

form label {
  display: flex;
  margin: 0 0 30px 0;
}

form label .label-title {
  width: 30%;
}

form label .label-inpt {
  width: 70%;
}

.btn-close {
  background: url("~@/assets/close.svg") no-repeat center;
  width: 20px;
  height: 20px;
  border: none;
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
}

</style>
