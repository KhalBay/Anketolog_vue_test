<template>
  <div class="modal" v-if="show" @click.stop="closeModal">
    <div @click.stop class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.show = false
      this.$emit('closeModal', false)
    }
  }
}
</script>

<style scoped>
.modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  display: flex;
}

.modal-content {
  margin: auto;
  background: white;
  width: 500px;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid grey;
}
</style>
