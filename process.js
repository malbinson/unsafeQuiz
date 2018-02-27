function processInput() {
    scrollTop();
    var answerArray = [];
    for(var y=0; y<=numPages;y++) {

        for(var z=0; z<questionsPerPage;z++) {

            answerArray.push(document.getElementById("q" + y + z).value);

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

    var exploreFinal = Math.round((explore + 40) * 1.73);
    var scienceFinal = Math.round((science+ 40) * 1.73);
    var courageFinal = Math.round((courage + 40) * 1.73);

    displayResults(exploreFinal,scienceFinal,courageFinal);

}

function displayResults(explore,science,courage) {


    document.getElementById("topContainer").style.display = "none";

    document.getElementById("explore").innerHTML = explore + "%";
    document.getElementById("science").innerHTML = science + "%";
    document.getElementById("courage").innerHTML = courage + "%";


    document.getElementById("results").style.display = "block";

    colorByScore("ex",explore);
    colorByScore("sc",science);
    colorByScore("co",courage);

    var largest = Math.max(explore,science,courage);

    if(largest == explore) {
        href= "https://twitter.com/intent/tweet?source=webclient&text=I%20just%20found%20out%20my%20strongest%20thinking%20is%20as%20an%20Explorer%20on%20this%20Unsafe%20Thinking%20quiz.%20http://www.jonahsachs.com/diagnostic%20%23unsafethinking"
    }
    if(largest == courage) {
        href = "https://twitter.com/intent/tweet?source=webclient&text=I%20just%20found%20out%20my%20strongest%20thinking%20comes%20from%20being%20Courageous%20on%20this%20Unsafe%20Thinking%20quiz.%20http://www.jonahsachs.com/diagnostic%20%23unsafethinking"
    }
    if(largest == science) {
        href = "https://twitter.com/intent/tweet?source=webclient&text=I%20just%20found%20out%20my%20strongest%20thinking%20comes%20from%20having%20a%20Scientific%20mindset%20on%20this%20Unsafe%20Thinking%20quiz.%20http://www.jonahsachs.com/diagnostic%20%23unsafethinking"
    }


}

function openTwitter() {
    window.open(href,
        'newwindow',
        'width=400,height=250');
    return false;
}

function colorByScore(elem,score) {

    if(score < 50 ) {
        document.getElementById(elem).style.background = "red";
    }
    else if(score < 76) {
        document.getElementById(elem).style.background = "yellow";
    }
    else {
        document.getElementById(elem).style.background = "green";
    }

}

