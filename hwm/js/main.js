//players
function fnbplayer() {
    var nbplayer = document.getElementById("nbplayer").value;
    var players = document.getElementById("players");
    localStorage.setItem("snbplayer", nbplayer);

    //players
    players.innerHTML = "";
    for (let i = 0; i < nbplayer; i++) {
        players.innerHTML += "<label> Donner le Nom de Player " + (i + 1) + " : </label>";
        players.innerHTML += "<input type='text' id='player" + (i + 1) + "' required> <br>";
    }

    if (nbplayer > 0) {
        players.innerHTML += "<input type='button' id='play' class='play' value='Enregistrer Players' onclick='players();'>";
    }
}




//game
function players() {
    var nbplayer = localStorage.getItem("snbplayer");
    var player = new Array(nbplayer);

    //id players
    for (let i = 0; i < nbplayer; i++) {
        player[i] = document.getElementById("player" + (i + 1)).value;
        localStorage.setItem("player" + (i + 1), player[i]);
    }
    var players = document.getElementById("players");
    var play = document.getElementById("play");

    var newt = document.createElement("a");
    newt.href = "index.html";
    newt.className = "nbtn";
    newt.appendChild(document.createTextNode('Play Now'));


    players.replaceChild(newt, play);
}



//name & image choix de random of player
function imageplayer() {
    localStorage.removeItem("nbrclick");
    var idgame = document.getElementById("idgame");
    var nbplayer = localStorage.getItem("snbplayer");
    //id players
    for (let i = 0; i < nbplayer; i++) {
        idgame.innerHTML += "<div class='a'> <label class='b'>" + localStorage.getItem("player" + (i + 1)) + "</label> <img src='img/start.png' class='img-responsive c' title='start' alt='" + localStorage.getItem("player" + (i + 1)) + "' id='img" + i + "' onclick='game(this);winner();'> </div>";
    }
}



//random
function random() {
    var rand = Math.floor(Math.random() * 3) + 1;
    return rand;
}

//change des image of player with immage of choix
function game(id) {
    //nbr de click
    var nbrclick = 0;
    var nbplayer = localStorage.getItem("snbplayer");
    //call func random
    var rand = random();
    //one click
    if ((id.title) == ("start")) {
        //incrimenet nbr de click
        var nbr = localStorage.getItem("nbrclick");
        nbr++;
        nbrclick = nbr;

        //change the image of player with image corres
        if (rand == 1) {
            id.src = "img/hajara.png";
            id.title = "hajara";
            localStorage.setItem(id.alt, "hajara")
            localStorage.setItem("nbrclick", nbrclick);
            return;
        }
        else if (rand == 2) {
            id.src = "img/wara9a.png";
            id.title = "wara9a";
            localStorage.setItem(id.alt, "wara9a")
            localStorage.setItem("nbrclick", nbrclick);
            return;
        }
        else if (rand == 3) {
            id.src = "img/mi9ass.png";
            id.title = "mi9ass";
            localStorage.setItem(id.alt, "mi9ass")
            localStorage.setItem("nbrclick", nbrclick);
            return;
        }
        else {
            id.src = "img/start.png";
            id.title = "start";
            localStorage.setItem(id.alt, "start")
            localStorage.setItem("nbrclick", nbrclick);
            return;
        }

    }


}

//algo de winner
function winner() {
    var nbplayer = localStorage.getItem("snbplayer");
    var p = new Array(nbplayer);
    var g = new Array(3);
    var nbplayer = localStorage.getItem("snbplayer");
    //id players
    for (let i = 0; i < nbplayer; i++) {
        //nom player
        var p, g;
        p[i] = localStorage.getItem("player" + (i + 1));
        //choix de random
        g[i] = localStorage.getItem(p[i]);
    }
    var h = 0;
    var m = 0;
    var w = 0;
    //if player got an choix 
    for (let j = 0; j < nbplayer; j++) {

        if (g[j] == "mi9ass") {
            m++;
        }
        if (g[j] == "wara9a") {
            w++;
        }
        if (g[j] == "hajara") {
            h++;
        }
    }
    //roll for win
    var ch = "";
    if ((m != 0) && (h != 0) && (w != 0)) {
        ch = "No Win!!!!";
    }
    if ((h == nbplayer) || (m == nbplayer) || (w == nbplayer)) {
        ch = "All Win";
    }
    if ((h != 0) && (m != 0) && (w == 0)) {
        ch = "hajara";
    }
    if ((h == 0) && (m != 0) && (w != 0)) {
        ch = "mi9ass";
    }
    if ((h != 0) && (m == 0) && (w != 0)) {
        ch = "wara9a";
    }

    //if all player click on images
    var nbrclic = localStorage.getItem("nbrclick");
    if (nbrclic == nbplayer) {
        var f = "";
        for (let k = 0; k < nbplayer; k++) {
            //nom player
            var p, g;
            p[k] = localStorage.getItem("player" + (k + 1));

            //choix de random
            g[k] = localStorage.getItem(p[k]);

            //congrat and add name of winner
            var idgame1 = document.getElementById("idgame1");
            if (g[k] == ch) {
                f += p[k] + " ";
                idgame1.innerHTML = '<div class="container winner"><img src="img/winner.png" class="img-responsive imgwin" width="100%" height="150px"><span class="namewin">' + f + '</span></div>';

            }
            else if (ch == "All Win") {
                f += p[k] + " ";
                idgame1.innerHTML = '<div class="container winner"><img src="img/winner.png" class="img-responsive imgwin" width="100%" height="150px"><span class="namewin">' + f + '</span></div>';
                ;
            }
            else if (ch == "No Win!!!!") {
                idgame1.innerHTML = '<div class="container winner"><img src="img/winner.png" class="img-responsive imgwin" width="100%" height="150px"><span class="namewin">' + ch + '</span></div>';
            }
        }
    }
}


//auto click on all images
function autoclick() {
    localStorage.setItem("nbrclick", 0);
    var nbplayer = localStorage.getItem("snbplayer");
    for (let i = 0; i < nbplayer; i++) {
        var id = "img" + i;
        var d = document.getElementById(id);
        d.title = "start";
        game(d);
    }
}

//return images clickabel
function clickabel() {
//delete div congratulation 
var idgame1 = document.getElementById("idgame1");

idgame1.innerHTML="";


    localStorage.setItem("nbrclick", 0);
    var nbplayer = localStorage.getItem("snbplayer");
    for (let i = 0; i < nbplayer; i++) {
        var id = "img" + i;
        var d = document.getElementById(id);
        d.src = "img/start.png";
        d.title = "start";
    }
}


//menu 3 player
function treeplayer()
{
    localStorage.setItem("snbplayer", 3);
    var players = document.getElementById("players");
    //players
    players.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        players.innerHTML += "<label> Donner le Nom de Player " + (i + 1) + " : </label>";
        players.innerHTML += "<input type='text' id='player" + (i + 1) + "' required> <br>";
    }
    players.innerHTML += "<input type='button' id='play' value='Enregistrer Players' onclick='players();' class='play'>";
}

//restart game by destroy local storege
function restart()
{
    localStorage.clear();
}

//show btn resumer
function showres()
{
    var resume = 0;
    var snbplayer = localStorage.getItem("snbplayer");
    for (let i = 0; i < snbplayer; i++) {
        if(localStorage.getItem("player" + (i + 1)))
        {
            resume++;
        }
    }
    if(resume == 0)
    {
        var x = document.getElementById("resume");
        x.style.display = "none";
    }
    else
    {
        var x = document.getElementById("resume");
        x.style.display = "block";
    }
}