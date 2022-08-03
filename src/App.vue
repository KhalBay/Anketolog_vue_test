<template>
  <div class="app">
    <TreeList :elements="allElement"/>
    <Modal :show="modalVisible" @closeModal="closeModal">
      <Form :elements="allElement"/>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/UI/Modal";
import Form from "./components/Form";
import TreeList from "./components/TreeList";
import {mapGetters} from "vuex";
import {mapMutations} from "vuex";

export default {
  components: {TreeList, Form, Modal},
  computed: mapGetters(['allElement', 'modalVisible']),
  methods: {
    ...mapMutations(["closeModal"]),
  }
}
</script>

<style>
body {
  font-family: 'Montserrat';
  background-size: 80px 80px;
  background-repeat: repeat;
  background-position: calc(50% - 40px) calc(50% - 40px);
  background-image: linear-gradient(90deg, #f5f5f5 2px, transparent 0), linear-gradient(180deg, #f5f5f5 2px, transparent 0);
  margin: 0;
  height: 100vh;
}

.app {
  width: 800px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.btn {
  align-self: flex-end;
}
</style>
