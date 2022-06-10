// new Vue( {
//   el: '#app',
//   data: {...},
//   methods: {
//     addItem: function() {
//       this.items.push({
//         id: this.items.length + 1,
//         name: this.newItem,
//         completed: false,
//       });
//       this.newItem = '';
//     },
//   },
// });


const app = vue.createApp({
  data() {
    return
      addItem: function() {
        this.items.push({
          id: this.items.length + 1,
          name: this.newItem, 
          completed: false,
        });
        this.newItem = '';
      }
     

    }
  }
  data();
})

app.mount('#app')

