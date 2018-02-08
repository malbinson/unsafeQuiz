function processInput() {
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

    console.log(answerArray);

}