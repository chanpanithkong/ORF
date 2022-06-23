// function hello() {
//   return console.log("hello");
// }

const clock = {
  time: 0,
  stopWatch: function () {
    console.log(this);
    const self = this;
    setInterval(function () {
      console.log(this);

      console.log(this.time++);
    }, 1000);
  },
};
clock.stopWatch();
