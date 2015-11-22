//main function
var init = function()
{
	//json object
	var questions = '[{"name" : "what is the color of apple?","options":["Red","Green","Blue"],"answer" : 0},{"name" : "what is the color of banana?","options":["Red","Yellow","Blue"],"answer" : 1},{"name" : "what is the middle color of Indian flag?","options":["Red","Yellow","white"],"answer" : 2}]';
	json = JSON.parse(questions);

    //first screen
	questDiv = document.createElement('div');
	questDiv.className = 'quiz';
	questDiv.style.width = "200px";
	questDiv.style.height = "200px";
	questDiv.style.background = "red";
	questDiv.style.border = "black";
	questDiv.innerHTML = '<p align = "center">Welcome to th quiz</p><span class="btn" onclick="show()" align="center"> Start </span>';
	document.body.appendChild(questDiv);

	//loop for all questions
    for (var i = 0; i < 3; i++) {
        div = document.createElement('div');
        div.className = 'quest';
	    div.style.width = "200px";
		div.style.height = "200px";
		div.style.background = "red";
		div.style.display = 'none';
		div.setAttribute('id', 'json['+i+']');
        div.innerHTML = '<span class="questMain">' + json[i].name + '</br></br></span><span class="answerList" onclick = "ansStore()"><input type = "radio" id = "radioOptions" value = "1">' + json[i].options[0] + '</br><input type = "radio" id = "radioOptions" value = "2">' + json[i].options[1] + '</br><input type = "radio" id = "radioOptions" value = "3">' + json[i].options[2] + '</br></br></br></br></br><span class="btn" onclick="show('+i+')">Next</span>';
        document.body.appendChild(div);
		//verifying selected answer
		var answer = document.getElementById('radioOptions');
	      for (var j = 0; j < 3; j++) {
		    if (answer[j].checked) 
		    {
		    	//if(answers[i].value == json)
		    	alert(answer[j].value);
		    }
	    }
    }

};//end init

//hide/show div
function show(r)
{
	questDiv.style.display = 'none';
	//document.getElementById('json['+r+']').style.display = 'block';
	div.style.display = 'block';

}

//storing answers
function ansStore()
{
	var answers = [];
	answer = document.getElementById('radioOptions');
	    if (answer[i].checked) 
	    {
	    	//if(answers[i].value == json)
	    	alert(answer[i].value);
	    }
}

init();