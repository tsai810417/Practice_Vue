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
    userInput: 'Set to blank'
  },
  // the methods that can be invoked by event listeners
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
});



// can change the value of the message key
// app.message = 'data has been changed';

// seen = false, the span will not be displayed
// app.seen = false;

// you can update the todos array
// app.todos.push({ text: 'New item' })
