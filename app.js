new Vue({
  el: "#vue-app",
  data: {
    name: "",
    age: "",
  },
  methods: {
    logName: function () {
      console.log("Name entered");
    },
    logAge: function () {
      console.log("Age Entered");
    },
  },
});
