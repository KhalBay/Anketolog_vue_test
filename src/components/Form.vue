<template>
  <form @submit.prevent @addUser="addUser">
    <h2>Добавление пользователя</h2>
    <label>
      <span class="label-title">Имя</span>
      <Input class="label-inpt" type="text" :value="user.name" @input.native="user.name = $event.target.value"/>
    </label>
    <label>
      <span class="label-title">Телефон</span>
      <Input class="label-inpt" type="text" :value="user.tel" @input.native="user.tel = $event.target.value"/>
    </label>
    <label>
      <span class="label-title">Начальник</span>
      <Select :elements="elements" v-model="user.head" @input.native="user.head = $event.target.value"/>
    </label>
    <Button class="form-btn" @click="addUser">Сохранить</Button>
  </form>
</template>

<script>
import Button from "./UI/Button";
import Input from "./UI/Input";
import Select from "./UI/Select";

export default {
  components: {Select, Input, Button},
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
        children: [],
      }
    }
  },
  methods: {
    addUser() {
      this.user.id = Date.now()
      this.$emit('addUser', this.user)
      this.user = {
        name: '',
        tel: '',
        head: '',
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

form > * {
  width: 100%;
}

form label {
  display: flex;
}

form label .label-title {
  width: 30%;
}

form label .label-inpt {
  width: 70%;
}

.form-btn {
  width: fit-content;
}

</style>
