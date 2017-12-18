var firstOption= document.getElementById('option-1');
var secondOption= document.getElementById('option-2');
var thirdOption= document.getElementById('option-3');
var fourthOption= document.getElementById('option-4');
var fifthOption= document.getElementById('option-5');

var firstSection= document.getElementById('section-1');
var secondSection= document.getElementById('section-2');
var thirdSection= document.getElementById('section-3');
var fourthSection= document.getElementById('section-4');
var fifthSection= document.getElementById('section-5');

firstOption.addEventListener("click", hideSections);
secondOption.addEventListener("click", hideSections);
thirdOption.addEventListener("click", hideSections);
fourthOption.addEventListener("click", hideSections);
fifthOption.addEventListener("click", hideSections);

function hideSections(){

	if(this.id==="option-1"){
		alert("hola opcion 1");	
	
	}else if(this.id==="option-2"){
		alert("hola opcion 2");	
	}else if(this.id==="option-3"){
		alert("hola opcion 3");	
	}else if(this.id==="option-4"){
		alert("hola opcion 4");	
	}else{
		alert("hola opcion 5");	
	}
}

function showFirstSection() {
	firstOption.className="active";
	secondSection.className="inactive";
	thirdSection.className="inactive";
	fourthSection.className="inactive";
	fifthSection.className="inactive";
}



