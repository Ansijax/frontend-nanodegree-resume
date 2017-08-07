/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Massimo La Morgia";
var role = "Phd student at Sapienza Univeristy";
var awesomeThoughts = "I am Massimo and i am AWESOME";
funThoughts =awesomeThoughts.replace("AWESOME","fun")
/*var  str = "audacity";
var newStr = str.slice(2);
console.log("U" + newStr);
console.log(funThoughts);*/
var skill= ["C","C++","Java Card", "Java" , "js" , " jQuery"];
var bio =	{
	"name" : name,
	"role" : role,
	"contacts" :{ 
		"location": "Roma, Italy",
		"mail": "massimo.lamorgia@uniroma1.it",
		"phone": "+39 3930743287"
	},
	"welcomeMessage" :"hi all",
	"skills" :skill,
	"image":"./images/personal_photo.jpeg"

};

var work ={
	"jobs":[
	{
		"employers":"Computer Science Department",
		"title":"Phd student",
		"location": "Roma, Sapienza Univeristy, Via Regine Elena 295",
		"date": " from 11/2015 to present",
		"description": "Studente di dottorato presso il dipartimento di Informatica, la “Sapienza” di Roma, advisor Prof. Alessandro Mei. Dedicando la mia attività di ricerca ai sistemi distribuiti e TOR (The Onion Router). In particolare alla privacy degli utenti su rete TOR e l’identificazione di attacchi agli HSDIR."
	},
	{
		"employers":"TAGstagram",
		"title":"Founder",
		//"location": "Roma, Sapienza Univeristy",
		"date": " from 09/2012 to present",
		"description": "Applicazione Android volta ad aiutare gli utenti a trovare insiemi di tag per le foto di Instagram, l’applicazione conta al momento oltre 500K download e recensioni su blog del settore (https://play.google.com/store/apps/details?id=com.ansij.tagstagram). Applicazione rimossa dal play store inseguito allo shut down delle API di instagram"
	},
	{
		"employers":"SAI S.R.L.",
		"title":"Consultant",
		//"location": "Roma, Via Amedeo Crivellucci 35",
		"date": "Occasionale",
		"description": "Stesura delle specifiche di progetto per un sistema di pagamento via NFC e SIM based, coordinando l’adeguamento a tali specifiche delle risorse interne all’azienda e i consulenti esterni."
	}
	,
	{
		"employers":"Consorzio Roma Ricerche",
		"title":"Software Engineer",
		//"location": "Roma, Via Giacomo Peroni 130",
		"date": " from 10/2013 to 03/2014",
		"description": ""
	},
	{
		"employers":"PayBay Network",
		"title":"Android & NFC consultant",
		"location": "Roma, via xx settembre",
		"date": " from 10/2013 to 03/2014",
		"description": "Progettazione e integrazione della tecnologia NFC e TSM esterni con i servizi offerti dall’azienda. Collaborazione allo sviluppo dell’applicazione mobile Passpartu."
	},
	{
		"employers":"Computer Science Department",
		"title":"Research Fellow",
		"location": "Roma, Sapienza Univeristy",
		"date": " from 01/2013 to 10/2015",
		"description": "RFIDLab in cui ho ricoperto il ruolo di  software engineer nell’ambito dei sistemi di pagamento elettronico, campi applicativi della tecnologia NFC, RFID e smart card, sviluppo di applicazione mobile."
	},
	{
		"employers":"CATTID",
		"title":"Research Fellow",
		"location": "Roma, Sapienza Univeristy",
		"date": " from 09/2011 to 12/2012",
		"description": "Laboratorio NFC e mobile, in cui ho ricoperto il ruolo di software engineer nell’ambito dei sistemi di pagamento elettronico, campi applicativi della tecnologia NFC e smart card"
	}
	]
};


var projects =
	[ 
	
	{
		"title":"TAGstagram",
		"description":"Android app",
		"link":"www.tagstagram.lol",
		"image":"www.tagstagram.lol"
	},
	{
		"title":"Passpartu",
		"description":"Android app",
		"link":"www.tagstagram.lol",
		"image":"www.tagstagram.lol"
	}
	];






var education = [
{ "school": "La Sapienza",
"location": "Rome, Sapienza Univeristy",
"grade":"Bachelor degree"
},
{ "school": "La Sapienza",
"location": "Rome, Sapienza Univeristy",
"grade":"Master degree"
},
{ "school": "Udacity",
"course": "Developing Android App",
"grade":"Graduated"
},
{ "school": "Udacity",
"course": "JavaScript Basics",
"grade":"Attende"
}
];

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMail = HTMLemail.replace("%data%",bio.contacts.mail);
var formattedPhone = HTMLmobile.replace("%data%",bio.contacts.phone);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.image);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(HTMLContactStart)
$("#contacts").append(formattedMail);

$("#contacts").append(formattedPhone);
$("#contacts").append(formattedLocation);
$("#header").append(formattedPic);


function inName(){

	name = name.toUpperCase();

	var splittedName = name.split(" ");
	var firstNameLower = splittedName[0].slice(1).toLowerCase();

	firstNameLower = splittedName[0][0] + firstNameLower;
	var newName = firstNameLower;
	for (var i = 1; i < splittedName.length; i++){
		newName = newName + " "+ splittedName[i];
	}
	return newName;
}

$(document).click(function(loc){

	logClicks(loc.pageX, loc.pageY);

	//console.log("x value:" + loc.pageX + " y value: "+ loc.pageY );
});

if(bio.skills.length > 0){
	console.log("skill");
	$("#header").append(HTMLskillsStart);
	for (job in bio.skills){
		var formattedskill = HTMLskills.replace("%data%", bio.skills[job]);
		$("#skills").append(formattedskill);
	}

}


for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employers);
	var formattedTitle  = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	displayWork();	

}


projects.display = function(){
console.log("test");
	for (project in projects){
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
		var projectDescription= HTMLprojectDescription.replace("%data%", projects[project].description);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDescription);
	
	}
};

projects.display();

$("#main").append(internationalizeButton);

function displayWork(){

	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedData = HTMLworkDates.replace("%data%", work.jobs[job].date);
	$(".work-entry:last").append(formattedData);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


}

$("#map-div").append(googleMap);
var formmattedName = HTMLheaderName.replace("%data%",name);
var formmattedRole = HTMLheaderRole.replace("%data%",role);
// $("#main").append(funThoughts);
//$("#header").append(formmattedName);
//$("#header").append(formmattedRole);
//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contact);
// $("#main").append(bio.welcome);
// $("#main").append(bio.skill);
//$("#main").append(bio.contact.mail);

 