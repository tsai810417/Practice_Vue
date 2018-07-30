Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: "#app", // specify where the Vue object will live
  data: {
    message: 'Hello Vue!',
    seen: true,
    todos: [
      { text: 'Todo #1' },
      { text: 'Todo #2' },
      { text: 'Todo #3' }
    ],
    userInput: 'Set to blank',
    groceryList: [
      { id: 1, text: 'banana' },
      { id: 2, text: 'apple' },
      { id: 3, text: 'orange' }
    ]
  },
  // the methods that can be invoked by event listeners
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  },
  watch: {
    userInput: function(){
      console.log(this.userInput)
    }
  }
});



// can change the value of the message key
// app.message = 'data has been changed';

// seen = false, the span will not be displayed
// app.seen = false;

// you can update the todos array
// app.todos.push({ text: 'New item' })
