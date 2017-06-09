$(document).ready(function() {
  var status = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  var uchoice = "X";
  var count = 0;
  var pos;
  var ochoice = "O";
  $("#TurnX").click(function() {
    uchoice = "X";
    ochoice = "O";
    $("#TurnY").removeClass("btn-primary");
    $("#TurnX").addClass("btn-primary");
    $(".cp").text("#");
    for(var i=0;i<status.length;i++)
      status[i] = "#";
    count = 0;
  });
  $("#TurnY").click(function() {
    uchoice = "O";
    ochoice = "X";
    $("#TurnX").removeClass("btn-primary");
    $("#TurnY").addClass("btn-primary");
    $(".cp").text("#");
    for(var i=0;i<status.length;i++)
      status[i] = "#";
    count = 0;
  });
  function userchoice(id, array) {
    count = count +1 ;
    if ($("#" + id).html() === "#"){ $("#" + id).html(uchoice);
    array[id] = uchoice;
    checkWin(status);
}
  }
  function systemchoice(array) {
    if((array[1] == uchoice && array[2] == uchoice) || ( array[6] == uchoice && array[3] == uchoice ) || array[4] == uchoice && array[8] == uchoice  )
      pos = 0;
    else if((array[7] == uchoice && array[8] == uchoice) || ( array[3] == uchoice && array[0] == uchoice ) || array[4] == uchoice && array[2] == uchoice)
      pos = 6;
   else if((array[4] == uchoice && array[0] == uchoice) || ( array[5] == uchoice && array[2] == uchoice ) || array[7] == uchoice && array[6] == uchoice)
      pos = 8;
   else if((array[1] == uchoice && array[0] == uchoice) || ( array[5] == uchoice && array[8] == uchoice ) || array[4] == uchoice && array[6] == uchoice)
      pos = 2;
    else if((array[0] == uchoice && array[2] == uchoice) || (array[4] == uchoice && array[7] == uchoice))
      pos = 1;
    else if((array[0] == uchoice && array[6] == uchoice) || (array[4] == uchoice && array[5] == uchoice))
      pos = 3;
    else if((array[3] == uchoice && array[5] == uchoice) || (array[1] == uchoice && array[7] == uchoice) || (array[0] == uchoice && array[8] == uchoice || array[2] == uchoice && array[6] == uchoice))
      pos = 4;
   else if((array[2] == uchoice && array[8] == uchoice) || (array[4] == uchoice && array[3] == uchoice))
      pos = 5;
    else if((array[6] == uchoice && array[8] == uchoice) || (array[4] == uchoice && array[1] == uchoice))
      pos = 7;
    else 
    pos = (Math.random() * 8).toFixed();
    while(array[pos] !== "#" && count < 5)
      pos = (Math.random() * 8).toFixed(); 
    
    array[pos] = ochoice;
    $("#" + pos).html(ochoice);
    checkWin(status);
  }
  $(".cp").click(function() {
    userchoice(this.id, status);
    systemchoice(status);
  });
  function checkWin(array){
    console.log("enter kiya  "+ array);
    if((array[0] == "X" && array[4] == "X" && array[8] == "X") || (array[2] == "X" && array[4] == "X" && array[6]=="X") || (array[0] == "X" && array[1] == "X" && array[2] == "X") || (array[3] == "X" && array[4] == "X" && array[5] == "X") || (array[6] == "X" && array[7] == "X" && array[8] == "X") || (array[0] == "X" && array[3] == "X" && array[6] == "X") || (array[1] == "X" && array[4] == "X" && array[7] == "X") || (array[2] == "X" && array[5] == "X" && array[8] == "X"))
      alert("X won");
  else if((array[0] == "O" && array[4] == "O" && array[8] == "O") || (array[2] == "O" && array[4] == "O" && array[6]=="O") || (array[0] == "O" && array[1] == "O" && array[2] == "O") || (array[3] == "O" && array[4] == "O" && array[5] == "O") || (array[6] == "O" && array[7] == "O" && array[8] == "O") || (array[0] == "O" && array[3] == "O" && array[6] == "O") || (array[1] == "O" && array[4] == "O" && array[7] == "O") || (array[2] == "O" && array[5] == "O" && array[8] == "O"))
      alert("O won");
    else if(array[0] !== "#" && array[1] !== "#" && array[2] !== "#" && array[3] !== "#" && array[4] !== "#" && array[5] !== "#" && array[5] !== "#" && array[6] !== "#" && array[7] !== "#" && array[8] !== "#")
      alert("Its a Tie :D");
  }
});
