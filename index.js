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
  },
});



// can change the value of the message key
// app.message = 'data has been changed';

// seen = false, the span will not be displayed
// app.seen = false;
