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

//Eventos para ocultar secciones
firstOption.addEventListener("click", hideSections);
secondOption.addEventListener("click", hideSections);
thirdOption.addEventListener("click", hideSections);
fourthOption.addEventListener("click", hideSections);
fifthOption.addEventListener("click", hideSections);

function hideSections(){

	if(this.id==="option-1"){
		firstSection.className="active";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-2"){
		firstSection.className="inactive";
		secondSection.className="active";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-3"){
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="active";
		fourthSection.className="inactive";
		fifthSection.className="inactive";
		event.preventDefault();
	}else if(this.id==="option-4"){
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="active";
		fifthSection.className="inactive";
		event.preventDefault();
	}else{
		firstSection.className="inactive";
		secondSection.className="inactive";
		thirdSection.className="inactive";
		fourthSection.className="inactive";
		fifthSection.className="active";
		event.preventDefault();	
	}
}

// eventos para iluminar pestañas
firstOption.addEventListener("click", selectOption);
secondOption.addEventListener("click",selectOption);
thirdOption.addEventListener("click", selectOption);
fourthOption.addEventListener("click", selectOption);
fifthOption.addEventListener("click", selectOption);

function selectOption(){

	if(this.id==="option-1"){
		firstOption.classList.add("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-2"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.add("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-3"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.add("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else if(this.id==="option-4"){
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.add("highlighted");
		fifthOption.classList.remove("highlighted");
		event.preventDefault();
	}else{
		firstOption.classList.remove("highlighted");
		secondOption.classList.remove("highlighted");
		thirdOption.classList.remove("highlighted");
		fourthOption.classList.remove("highlighted");
		fifthOption.classList.add("highlighted");
		event.preventDefault();
	}
}
