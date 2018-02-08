var questionText = ["<br>Are you ready to rock?", "<br>What is your favorite thing?","<br>Are we having fun?"];


function createQuestions() {

    var parentDiv = document.getElementById("container");

    var qTable = document.createElement("table");
    qTable.setAttribute("id","qTable");

    //child.setAttribute("type", "radio");

    parentDiv.appendChild(qTable);

    for(var i=0; i<questionText.length;i++) {

        var qRow = document.createElement("tr");
        var qCell = document.createElement("td");
        qCell.setAttribute("colspan",8);

        qTable.appendChild(qRow);
        qRow.appendChild(qCell);
        qRow.setAttribute("class","qRow");
        qCell.innerHTML = questionText[i];

        var aRow = document.createElement("tr");
        var aCell1 = document.createElement("td");
        var aCell2 = document.createElement("td");
        var aCell3 = document.createElement("td");
        var aCell4 = document.createElement("td");
        var aCell5 = document.createElement("td");
        var aCell6 = document.createElement("td");
        var aCell7 = document.createElement("td");
        var aCell8 = document.createElement("td");

        qTable.appendChild(aRow);
        aRow.appendChild(aCell1);
        aRow.appendChild(aCell2);
        aRow.appendChild(aCell3);
        aRow.appendChild(aCell4);
        aRow.appendChild(aCell5);
        aRow.appendChild(aCell6);
        aRow.appendChild(aCell7);
        aRow.appendChild(aCell8);

        aCell1.setAttribute("width","25%");
        aCell1.innerHTML = "Strongly Disagree";

        var radio1 = document.createElement("input");
        radio1.setAttribute("type","radio");
        radio1.setAttribute("name","q"+i);
        radio1.setAttribute("value","1");

        var radio2 = document.createElement("input");
        radio2.setAttribute("type","radio");
        radio2.setAttribute("name","q"+i);
        radio2.setAttribute("value","2");

        var radio3 = document.createElement("input");
        radio3.setAttribute("type","radio");
        radio3.setAttribute("name","q"+i);
        radio3.setAttribute("value","3");

        var radio4 = document.createElement("input");
        radio4.setAttribute("type","radio");
        radio4.setAttribute("name","q"+i);
        radio4.setAttribute("value","4");

        var radio5 = document.createElement("input");
        radio5.setAttribute("type","radio");
        radio5.setAttribute("name","q"+i);
        radio5.setAttribute("value","5");

        var radio6 = document.createElement("input");
        radio6.setAttribute("type","radio");
        radio6.setAttribute("name","q"+i);
        radio6.setAttribute("value","6");

        aCell8.setAttribute("width","25%");
        aCell8.innerHTML = "Strongly Agree";

        aCell2.appendChild(radio1);
        aCell3.appendChild(radio2);
        aCell4.appendChild(radio3);
        aCell5.appendChild(radio4);
        aCell6.appendChild(radio5);
        aCell7.appendChild(radio6);

    }

}