
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
        div.innerHTML = '<span class="questMain">' + json[i].name + '</br></br></span><span class="productPrice">' + json[i].options + '</br></br><span class="btn" onclick="show('+i+')">Next</span>';
        document.body.appendChild(div);
    }

};//end init

//hide/show div
function show(r)
{
	questDiv.style.display = 'none';
	//document.getElementById('json['+r+']').style.display = 'block';
	div.style.display = 'block';

}

init();