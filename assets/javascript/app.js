var trivia = [
    pregTrivia1 ={
        triv: "In which town do the Simpsons reside?",
        opciones: ["Springfield","Shelbyville","Seinfeld"],
        respuesta: "Springfield"
    },
    pregTrivia2 ={
        triv: "What is the name of the Simpson's next door neighbor?",
        opciones: ["Barney Gumble","Ned Flanders","Principal Skinner"],
        respuesta: "Ned Flanders"
    },
    pregTrivia3 ={
        triv: "Who founded the Simpson's town?",
        opciones: ["Jebadiah Springfield","Zachariah Springfield","Springfield Manhattan"],
        respuesta: "Jebadiah Springfield"
    },
    pregTrivia4 ={
        triv: "How old is Bart?",
        opciones: ["10","11","12"],
        respuesta: "10"
    },
    pregTrivia5 ={
        triv: "What is the name of the clown on Channel 6?",
        opciones: ["Gabbo","Krusty","Bonko"],
        respuesta: "Krusty"
    },
    pregTrivia6 ={
        triv: "What is the name of Lisa's jazz mentor?",
        opciones: ["Billy Jazzman","Blind Willy Witherspoon","Bleeding Gums Murphy"],
        respuesta: "Bleeding Gums Murphy"
    },
    pregTrivia7 ={
        triv: "Who is Mr Burn's Assistant?",
        opciones: ["Seymour Skinner","Barnard Gumble","Waylon Smithers"],
        respuesta: "Waylon Smithers"
    },
    pregTrivia8 ={
        triv: "What is the name of the bar where Homer drinks?",
        opciones: ["Moe´s Tavern","Joe's Cavern","The Drink Hole"],
        respuesta: "Moe´s Tavern"
    },
    pregTrivia9 ={
        triv: "Which one of these is not a catchphrase Bart uses?",
        opciones: ["Aye Carumba!","Don't have a cow, man!","Woohoo!"],
        respuesta: "Woohoo!"
    },
    pregTrivia10 ={
        triv: "What did the Simpsons get for their first Christmas?",
        opciones: ["A dog","A cat","A hamster"],
        respuesta: "A dog"
    },
];


var respuestas = [];
var calificacion = 0;

for (var k = 0; k < trivia.length; k++) {
    respuestas.push("");
    
}


$("#start").on("click",function(){
    $("#start").hide();
    $(".container").css("background-image","url('')");
    var newDiv = $("<div>");
    newDiv.addClass("preguntas");
    for (var i = 0; i < trivia.length; i++) {
        var newPreg = $("<p>");
        newPreg.addClass("pregunta");
        newPreg.text(trivia[i].triv);
        $(newDiv).append(newPreg);
        var opcPreg = $("<p>");
        
        for (var j = 0; j < 3; j++) {
            var opc = $("<label>");
            opc.text(trivia[i].opciones[j]);
            $(opcPreg).append(opc);

            var inp = $("<input>");
            inp.attr("type","radio");
            inp.attr("name","Pregunta"+i);
            inp.attr("numPreg",i);
            inp.addClass("opcionesRes")
            inp.attr("id",trivia[i].opciones[j]);
            $(opcPreg).append(inp);
        }

        $(newDiv).append(opcPreg);

    }
    $(".container").append(newDiv);

    var sub = $("<a>");
    sub.attr("id","submit");
    sub.addClass("btn btn-primary btn-lg");
    sub.attr("href","#");
    sub.attr("role","button");
    sub.text("Submit the Answers");
    $(".jumbotron").append(sub);

    var crono =$("<h3>");
    crono.attr("id","display");
    $(".container").prepend(crono);

    var cronot =$("<h1>");
    cronot.attr("id","displayt");
    cronot.text("Your remaining time: ");
    $(".container").prepend(cronot);

    start();


});

$('.opcionesRes').click(function() {
    $(this).removeClass('opcionesRes');
    $(this).addClass('Respuesta');
});

$(document).on("click", ".opcionesRes", funcionALlamar); 

function funcionALlamar(e){
    respuestas[parseInt(this.name.charAt(8))] = this.id;
}


$(document).on("click", "#submit", finalizar); 

function finalizar(){
        for (var i = 0; i < respuestas.length; i++) {
        if (respuestas[i]===trivia[i].respuesta){
            
            calificacion = (calificacion + 1);
        }        
    }

    $(".preguntas").hide();
    $("#display").hide();
    $("#displayt").hide();
    var finDiv = $("<div>");
    finDiv.addClass("final");
    finDiv.text("Acertaste "+calificacion+" de "+trivia.length+" preguntas");
    $(".container").append(finDiv);
    $(".container").css("background-image","url('https://frinkiac.com/video/S08E12/pb4KVaXUoeDfGSGWuuWcTF-EsRk=.gif')");

}

var intervalId;
var clockRunning = false;
var time = 50;

function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

  function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    if (time ===0){
        finalizar();
    }
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
