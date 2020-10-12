import "./styles.css";

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

function checkWin(table) {
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

    for (var t = 0; t < 5; t++) {
      if (square[t].innerHTML === xo[i]) {
        vaaka1++;
      }
      if (square[t + 5].innerHTML === xo[i]) {
        vaaka2++;
      }
      if (square[t + 10].innerHTML === xo[i]) {
        vaaka3++;
      }
      if (square[t + 15].innerHTML === xo[i]) {
        vaaka4++;
      }
      if (square[t + 20].innerHTML === xo[i]) {
        vaaka5++;
      }
      if (table.rows[t].cells[0].innerHTML === xo[i]) {
        pysty1++;
      }
      if (table.rows[t].cells[1].innerHTML === xo[i]) {
        pysty2++;
      }
      if (table.rows[t].cells[2].innerHTML === xo[i]) {
        pysty3++;
      }
      if (table.rows[t].cells[3].innerHTML === xo[i]) {
        pysty4++;
      }
      if (table.rows[t].cells[4].innerHTML === xo[i]) {
        pysty5++;
      }
      if (table.rows[t].cells[t].innerHTML === xo[i]) {
        viisto1++;
      }
      var reverse = 4 - t;
      if (table.rows[t].cells[reverse].innerHTML === xo[i]) {
        viisto2++;
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
        clearTable(table);
      }
    }
  }
}

function checkDraw(table) {
  var draw_count = 0;

  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      if (
        table.rows[t].cells[i].innerHTML === "X" ||
        table.rows[t].cells[i].innerHTML === "O"
      ) {
        draw_count++;
      }
    }
  }
  if (draw_count === 25) {
    alert("It's a draw!");
    clearTable(table);
  }
}

function clearTable(table) {
  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      table.rows[t].cells[i].innerHTML = "";
      table.rows[t].cells[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
  }
  bar.style.width = "0%";
  count = 0;
  count_marks = 0;
}
