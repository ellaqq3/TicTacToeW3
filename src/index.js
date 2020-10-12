import "./styles.css";

var timeleft;
var bar;
var downloadTimer;
var timeout;
var count = 0;
var count_marks = 0;

var square = document.querySelectorAll(".col");
for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function () {
    fillCell(this);
  });
}

function fillCell(t_cell) {
  count++;
  changeTurn();
  bar = document.querySelector(".determinate");
  if (count % 2 === 0) {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "O";
      t_cell.style.backgroundColor = "rgb(250, 128, 114)";
      countdownTime();
      count_marks++;
      var percent = count_marks / 25;
      var bar_percent = percent * 100;

      bar.style.width = bar_percent + "%";
    } else {
      alert("That cell is already chosen");
      count--;
    }
  } else {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "X";
      t_cell.style.backgroundColor = "rgb(124, 252, 0)";
      countdownTime();
      count_marks++;
      var percent = count_marks / 25;
      var bar_percent = percent * 100;
      bar.style.width = bar_percent + "%";
    } else {
      alert("That cell is already chosen");
      count--;
    }
  }
  checkWin();
  checkDraw();
}

function changeTurn() {
  timeleft = 10;
  clearInterval(downloadTimer);

  //interval timer
  downloadTimer = setInterval(function () {
    if (timeleft === 0) {
      clearInterval(downloadTimer);
    } else {
      document.getElementById("time").innerHTML = "Time left: " + timeleft;
      timeleft--;
    }
  }, 1000);
  nullTimeout();
}

function countdownTime() {
  timeout = setTimeout(alertTime, 10000);
}

function alertTime() {
  alert("Time is out, your turn ended");
  count++;
  changeTurn();
  countdownTime();
}

function nullTimeout() {
  clearTimeout(timeout);
}

function checkWin() {
  var xo = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var pysty1 = 0;
    var pysty2 = 0;
    var pysty3 = 0;
    var pysty4 = 0;
    var pysty5 = 0;
    var vaaka1 = 0;
    var vaaka2 = 0;
    var vaaka3 = 0;
    var vaaka4 = 0;
    var vaaka5 = 0;
    var viisto1 = 0;
    var viisto2 = 0;

    var round = 0;

    for (var t = 0; t < 5; t++) {
      round++;

      if (square[t].innerHTML === xo[i]) {
        vaaka1++;
        if (round === 1) {
          pysty1++;
          viisto1++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
          viisto2++;
        }
      }
      if (square[t + 5].innerHTML === xo[i]) {
        vaaka2++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
          viisto1++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
          viisto2++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (square[t + 10].innerHTML === xo[i]) {
        vaaka3++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
          viisto1++;
          viisto2++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (square[t + 15].innerHTML === xo[i]) {
        vaaka4++;
        if (round === 1) {
          pysty1++;
        }
        if (round === 2) {
          pysty2++;
          viisto2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
          viisto1++;
        }
        if (round === 5) {
          pysty5++;
        }
      }
      if (square[t + 20].innerHTML === xo[i]) {
        vaaka5++;
        if (round === 1) {
          pysty1++;
          viisto2++;
        }
        if (round === 2) {
          pysty2++;
        }
        if (round === 3) {
          pysty3++;
        }
        if (round === 4) {
          pysty4++;
        }
        if (round === 5) {
          pysty5++;
          viisto1++;
        }
      }
      if (
        pysty1 === 5 ||
        pysty2 === 5 ||
        pysty3 === 5 ||
        pysty4 === 5 ||
        pysty5 === 5 ||
        vaaka1 === 5 ||
        vaaka2 === 5 ||
        vaaka3 === 5 ||
        vaaka4 === 5 ||
        vaaka5 === 5 ||
        viisto1 === 5 ||
        viisto2 === 5
      ) {
        if (xo[i] === "X") {
          alert("Player 1 won!");
        }
        if (xo[i] === "O") {
          alert("Player 2 won!");
        }
        clearTable();
      }
    }
  }
}

function checkDraw() {
  var draw_count = 0;

  for (var t = 0; t < square.length; t++) {
    if (square[t].innerHTML === "X" || square[t].innerHTML === "O") {
      draw_count++;
    }
  }
  if (draw_count === 25) {
    alert("It's a draw!");
    clearTable();
  }
}

function clearTable() {
  for (var t = 0; t < square.length; t++) {
    square[t].innerHTML = "";
    square[t].style.backgroundColor = "rgb(255, 255, 255)";
  }
  bar.style.width = "0%";
  count = 0;
  count_marks = 0;
}
