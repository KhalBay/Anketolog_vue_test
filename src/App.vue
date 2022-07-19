<template>
  <div class="app">
    <Button class="btn" @click="showModal">Добавить</Button>
    <UsersTable :elements="elements"/>
    <Modal :show="modalVisible" @closeModal="closeModal">
      <Form @addUser="addUser" :elements="elements"/>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/UI/Modal";
import Button from "./components/UI/Button";
import Form from "./components/Form";
import UsersTable from "./components/UsersTable";

export default {
  components: {UsersTable, Form, Button, Modal},
  data() {
    return {
      elements: [
        {id: 1, name: 'Марина', tel: '+7 941 123 21 21', children: []},
        {id: 2, name: 'Петр', tel: '+7 941 123 21 21', children: []},
        {
          id: 3, name: 'Алексей', tel: '+7 941 123 21 21', children: [
            {
              id: 4, name: 'Иван', tel: '+7 941 123 21 21', children: [
                {
                  id: 5, name: 'Егор', tel: '+7 941 123 21 21', children: [
                    {
                      id: 6, name: 'Анна', tel: '+7 941 123 21 21', children: [
                        {
                          id: 7, name: 'Ирина', tel: '+7 941 123 21 21', children: [
                            {
                              id: 8, name: 'Анастасия', tel: '+7 941 123 21 21', children: [
                                {id: 9, name: 'Сергей', tel: '+7 941 123 21 21', children: []}
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {id: 11, name: 'Юлия', tel: '+7 941 123 21 21', children: []},
              ]
            },
          ]
        },
        {id: 10, name: 'Борис', tel: '+7 941 123 21 21', children: []},
      ],
      modalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    addUser(user) {
      if (user.head) {
        this.checkParent(user)
      } else {
        this.elements.push(user)
      }
      localStorage.setItem(user.id, JSON.stringify(user));
      this.closeModal()
    },
    checkParent(user) {
      const id = Number(user.head)
      this.elements.forEach(el => {
        if (el.id === id) {
          el.children.push(user)
        }
        if (el.children.length) {
          return this.checkChild(el.children, id, user)
        }
      })
    },
    checkChild(children, id, user) {
      children.forEach(el => {
        if (el.id === id) {
          el.children.push(user)
        }
      })
      children.forEach(el => {
        if (el.children.length) {
          return this.checkChild(el.children, id, user)
        }
      })
    }
  },
  mounted() {
    for (let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i)
      const user = localStorage.getItem(key)
      if (user !== 'WARN') {
        const userObj = JSON.parse(user)
        this.checkParent(userObj)
      }
    }
    console.log(this.elements)
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
