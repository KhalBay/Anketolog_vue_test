export default {
  actions: {},
  mutations: {
    closeModal(state, modalVisible) {
      state.modalVisible = false;
    },
    editItem(state, element) {
      state.modalVisible = true
      state.currentElement = element
    },
    delItem(state, elements) {
      function deleteEl(arr, id) {
        return arr.filter(function(el) {
          el.children = el.children.filter(function(item) {
            if (item.children.length) {
              item.children = item.children.filter(function (downLevl){
                return downLevl.id !== id; // 'Удаляем' нажатый элемент на нижнем уровне
              })
            }
            return item.id !== id; // 'Удаляем' нажатый элемент на первом подуровне
          });
          return el.id !== id; // 'Удаляем' нажатый элемент на верхних уровнях
        });
      }

      state.elements = deleteEl(state.elements, elements.id);
    }
  },
  state: {
    elements: [
      {id: 1, name: 'Dir 1', type: 'folder', children: [
          {id: 4, name: 'Dir 1-1', type: 'folder', children: [
              {id: 6, name: 'File 1-1-1', type: 'file', children: []},
            ]},
          {id: 5, name: 'File 1-2', type: 'file', children: []},
        ]},
      {id: 2, name: 'Dir 2', type: 'folder', children: [
          {id: 7, name: 'Dir 2-1', type: 'folder', children: []},
          {id: 8, name: 'File 2-2', type: 'file', children: []},
        ]},
      {id: 3, name: 'File 2', type: 'file', children: []},
    ],
    modalVisible: false,
    currentElement: {},
  },
  getters: {
    allElement(state) {
       return state.elements
    },
    modalVisible(state) {
       return state.modalVisible
    },
    getCurrentElement(state) {
       return state.currentElement
    },
  },
}
