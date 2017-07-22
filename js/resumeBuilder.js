
var bio = {
	"name" : "Phyllipe Alves",
	"role" : "Estudante de Ciência da Computação",
	"contacts" : {
		"mobile" : "9-9615-0183",
		"email" : "phyllipeba@gmail.com",
		"github" : "https://github.com/BezerraP",
		"twitter" : "https://twitter.com/",
		"linkedin" : "https://es.linkedin.com/",
		"location" : "Maceió"
	},
	"welcomeMessage" : "Nosce te ipsum.",
	"skills" : ["Unity", "C/C++", "Python", "Javascript", "Javascript", "Adobe Photoshop", "Adobe Illustrator"],
	"bioPic" : "http://oi65.tinypic.com/23ww2uc.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"BezerraP");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "Não tenho");
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Não tenho");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);



	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


var work = {
	"jobs": [
		{
			"employer" : "Autônomo",
			"title" : "Desenvolvedor de Jogos",
			"dates" : "Março 2017 - Abril 2017",
			"description" : "Criei dois jogos simples para jogar entre amigos."
		}
	],
	display() {
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				//Div para work experiences
				$("#workExperience").append(HTMLworkStart);
				//Unir el employer y el nombre del trabajo
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var concattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(concattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}


var projects = {
	"projects": [
	],
	display() {
		if (projects.projects.length > 0) {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				//var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title)
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}		
			}
		}
	}
}


var education = {
	"schools": [
		{
			"name" : "Colégio São Lucas",
			"location" : "Maceió, Alagoas",
			"degree" : "Ensino Médio",
			"majors" : [""],
			"dates" : 2015,
			"url" : "http://www.saolucasmaceio.com.br"
		},
		{
			"name" : "Universidade Federal de Alagoas",
			"location" : "Maceió, Alagoas",
			"degree" : "Superior",
			"majors" : ["Ciência da computação"],
			"dates" : 2017,
			"url" : "http://www.ufal.edu.br"
		},
		{
			"name" : "International Language Academy of Canada",
			"location" : "Toronto",
			"degree" : "",
			"majors" : ["Língua Inglesa"],
			"dates" : 2016,
			"url" : "https://www.ilac.com"
		}
	]
	,
	"onlineCourses": [
		{
			"title" : "General English",
			"school" : "ILAC Toronto",
			"dates" : 2016,
			"url" : "https://www.ilac.com"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2017,
			"url" : "http://www.udacity.com/course/ud804"
		}
	],
	display() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

			for (school in education.schools) {
				if (!education.schools[school].url) {
					var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				}else{
					var formattedName = addHyperLink(HTMLschoolName,education.schools[school].url,education.schools[school].name);
				}				
				$(".education-entry:last").append(formattedName);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);
				
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		
		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

			for (onlineCourse in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);	

				var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[onlineCourse].url, education.onlineCourses[onlineCourse].title);
				//var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
				$('.education-entry:last').append(formattedOnlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
				$('.education-entry:last').append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
				$('.education-entry:last').append(formattedonlineDates);

				//var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
				//$('.education-entry:last').append(formattedonlineURL);
			}
		}		
	}
}


bio.display();
work.display();
projects.display();
education.display();


function addHyperLink(html,url,text){
    if (!text) { 
    	text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
