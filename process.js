function processInput() {
    scrollTop();
    var answerArray = [];
    for(var y=0; y<=numPages;y++) {

        for(var z=0; z<questionsPerPage;z++) {
            var radios = document.getElementsByName("q" + y + z);

            for (var i = 0, length = radios.length; i < length; i++)
            {
                if (radios[i].checked)
                {
                    answerArray.push(radios[i].value);
                    break;
                }
            }
        }
    }

    computeResults(answerArray);

}

function computeResults(arr) {
    arr.unshift(0);
    for(var i=0; i<arr.length;i++) {
        arr[i] = parseInt(arr[i]);
    }

    var explore = arr[5] + arr[11] + arr[14] - arr[1] - arr[8] - arr[10];
    var science = arr[6] + arr[9] + arr[16] - arr[4] - arr[12] - arr[15];
    var courage = arr[2] + arr[3] + arr[17] - arr[7] - arr[13] - arr[18];

    var exploreFinal = Math.round((explore + 40) * 1.73) + "%";
    var scienceFinal = Math.round((science+ 40) * 1.73) + "%";
    var courageFinal = Math.round((courage + 40) * 1.73) + "%";

    console.log("explore:" + exploreFinal);
    console.log("science:" + scienceFinal);
    console.log("courage:" + courageFinal);

    //document.getElementById("topContainer").innerHTML = "<img src='img/spin.gif'>";

    //setTimeout(displayResults(), 2000);

    displayResults(exploreFinal,scienceFinal,courageFinal);

}

function displayResults(explore,science,courage) {


    document.getElementById("topContainer").style.display = "none";

    document.getElementById("explore").innerHTML = explore;
    document.getElementById("science").innerHTML = science;
    document.getElementById("courage").innerHTML = courage;


    document.getElementById("results").style.display = "block";

}



