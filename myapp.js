var hr = 0;
var min = 0;
var sec = 0;
var stopt = 1;

const hr1 = document.getElementById("hr");
const mn1 = document.getElementById("mn"); 
const sc1 = document.getElementById("sec");

function st_timer()
{
	if(stopt==1)
	{
		stopt=0;
		timercy();
	}
	
}

function sp_timer()
{

	if(stopt==0)
		stopt=1;
}

function rst()
{
	all_p = document.querySelectorAll('.box > p')

	
	all_p.forEach((p_element) => {
		p_element.innerHTML = "00";	
	}
	);
	
	hr=0,sec=0,min=0;
	stopt=1;
}

function timercy() 
{
	if(stopt==0)
	{
	sec++;
	if(sec==60)
	{
		sec=0;
		min++;
	}
	if(min==60)
	{
		min=0;
		hr++;
	}
	if(sec < 10){
		sc1.innerHTML =  `<h3>Seconds</h3><p>0${sec}</p>`;
	}
	else
	{
		sc1.innerHTML = `<h3>Seconds</h3><p>${sec}</p>`;
	}
	if(min < 10){
		mn1.innerHTML =  `<h3>Minutes</h3><p>0${min}</p>`;
	}
	else
	{
		mn1.innerHTML = `<h3>Minutes</h3><p>${sec}</p>`;
	}
	if(hr < 10){
	hr1.innerHTML =  `<h3>Hours</h3><p>0${hr}</p>`;
	}
	else
	{
	hr1.innerHTML = `<h3>Hours</h3><p>${hr}</p>`;
	}
	setTimeout(timercy,1000);
	}
}





















