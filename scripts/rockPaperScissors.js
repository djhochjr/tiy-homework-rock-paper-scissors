var playerScore = 0;
var computerScore = 0;

$(function () {
    $("button").click(function(){
        $("#outcome").removeClass("win").removeClass("tie").removeClass("lose").css("visibility", "hidden");
        $("#game > div").removeClass("rock").removeClass("paper").removeClass("scissors");
        var playersChoice = $(this).val();
        countDown(playersChoice);
    });
});

function countDown(playersChoice) {
    var countDown = 4;
    var timer = setInterval(function () {
        $("#counter").css("visibility", "visible");
        countDown--;
        showCountDown(countDown);

        switch (countDown){
            case 3:
                $("#counter").text("3..");
                break;
            case 2:
                $("#counter").text("3..2..");
                break;
            case 1:
                $("#counter").text("3..2..1..");
                break;
            default:

                clearInterval(timer);

                $("#counter").css("visibility", "hidden");

                determineGame(playersChoice);
                break;
        }
    }, 1000)
}
function showCountDown(countDown) {
    $("#counter").text(countDown);
}
function determineGame(playersChoice) {
    //this determines the computer input
    var computerResult = randomResult();

    setImages(1, playersChoice);
    setImages(2, computerResult);

    determineWinner(playersChoice, computerResult);

    $(".score:first span").text(playerScore);
    $(".score:last span").text(computerScore);


}

function randomResult(){
    var result;
    switch(Math.floor(Math.random()*3)) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;

}
function determineWinner(playersChoice, computerChoice){
    if ((playersChoice == "rock" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore = playerScore + 1;
        $(".score:first span").text(playerScore);

    } else if ((playersChoice == "rock" ) && (computerChoice == "rock")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    } else if ((playersChoice == "rock" ) && (computerChoice == "paper")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore = computerScore + 1;
        $(".score:last span").text(computerScore);

    } else if ((playersChoice == "paper" ) && (computerChoice == "rock")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore++;
        $(".score:first span").text(playerScore);

    } else if ((playersChoice == "paper" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore++;
        $(".score:last span").text(computerScore);

    } else if ((playersChoice == "paper" ) && (computerChoice == "paper")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    } else if ((playersChoice == "scissors" ) && (computerChoice == "paper")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore++;
        $(".score:first span").text(playerScore);

    } else if ((playersChoice == "scissors" ) && (computerChoice == "rock")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore++;
        $(".score:last span").text(computerScore);

    } else if ((playersChoice == "scissors" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    }
}
function setImages(playerTypeInt, playersChoiceString) {
    var changePosition;

    if (playerTypeInt == 1) {
        changePosition = $("#player");
    } else {
        changePosition = $("#computer");
    }

    if (playersChoiceString == "rock"){

        $(changePosition).addClass("rock").css("visibility", "visible");;

    } else if (playersChoiceString == "paper"){

        $(changePosition).addClass("paper").css("visibility", "visible");;

    } else if (playersChoiceString == "scissors"){

        $(changePosition).addClass("scissors").css("visibility", "visible");;

    }
}