
var numPages = allQuestions.length - 1;
var questionsPerPage = 6;
var totalQuestions = numPages * questionsPerPage;

var numCells = 8;
var numRadioCells = 6;
var page = 0;

function onLoad() {
    document.getElementById("title").innerHTML = "<img src='img/header.png'>";
    document.getElementById("topContainer").style.display = "none";
}

function createQuestions() {

    document.getElementById("intro").style.display = "none";
    document.getElementById("topContainer").style.display = "inline";

    for(var g=0;g<=numPages;g++) {

        var parentDiv = document.getElementById("qSet" + g);
        var qTable = document.createElement("table");
        qTable.setAttribute("id","qTable");
        parentDiv.appendChild(qTable);

        for(var i=0; i<allQuestions[g].length; i++) {
            var cells = [];
            var radioCells = [];
            var qRow = document.createElement("tr");
            var qCell = document.createElement("td");
            qCell.setAttribute("colspan",8);

            qTable.appendChild(qRow);
            qRow.appendChild(qCell);
            qRow.setAttribute("class","qRow");
            qCell.innerHTML = allQuestions[g][i];

            var aRow = document.createElement("tr");
            qTable.appendChild(aRow);

            for(var q=0; q<numCells;q++) {
                cells.push(document.createElement("td"));
            }

            cells[0].setAttribute("class","edgeCell");
            cells[0].innerHTML = "Strongly Disagree";
            cells[7].setAttribute("class","edgeCell");
            cells[7].innerHTML = "Strongly Agree";

            for(var s=0; s<numRadioCells;s++) {
                radioCells.push(document.createElement("input"));
                radioCells[s].setAttribute("type","radio");
                radioCells[s].setAttribute("name","q"+g+i);
                radioCells[s].setAttribute("value",s+1);

                //DEV
                if(s==5){
                    radioCells[s].setAttribute("checked","checked");
                }
                //DEV

            }

            cells[1].appendChild(radioCells[0]);
            cells[2].appendChild(radioCells[1]);
            cells[3].appendChild(radioCells[2]);
            cells[4].appendChild(radioCells[3]);
            cells[5].appendChild(radioCells[4]);
            cells[6].appendChild(radioCells[5]);

            for(var d=0;d<numCells;d++) {
                aRow.appendChild(cells[d]);
            }

        }
    }

    populateButtons();
    determinePage();

}

function incrementPage(prevOrNext) {
    if(prevOrNext.value=="prev") {
        page--;
    }
    if(prevOrNext.value=="next") {
        page++;
    }
    populateButtons();
    determinePage();
}

function determinePage() {

    for(var k=0;k<=numPages;k++) {
        document.getElementById("qSet" + k).style.display = "none";
    }
    document.getElementById("qSet" + page).style.display = "inline";
}

function populateButtons() {
    var btnDiv = document.getElementById("btnSet");
    btnDiv.innerHTML = "";

    var prev = document.createElement("button");
    var next = document.createElement("button");
    var submit = document.createElement("button");

    prev.innerHTML = "< Previous";
    next.innerHTML = "Next >";
    submit.innerHTML = "Submit";

    prev.setAttribute("value","prev");
    prev.setAttribute("onclick","incrementPage(this)");
    prev.setAttribute("class","btn btn-primary");

    next.setAttribute("value","next");
    next.setAttribute("onclick","incrementPage(this)");
    next.setAttribute("class","btn btn-primary");

    submit.setAttribute("onclick","processInput()");
    submit.setAttribute("class","btn btn-success");

    if(page != 0){
        btnDiv.appendChild(prev);
    }
    if(page != numPages) {
        btnDiv.appendChild(next);
    }
    if(page == numPages) {
        btnDiv.appendChild(submit);
    }
}