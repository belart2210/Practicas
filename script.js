function eventoScroll(event) {
    var total_height = document.body.offsetHeight;
    var scroll = window.pageYOffset;
    var pop_up = document.getElementById("coockie-pop");

    if (total_height / 2 < scroll) {
        pop_up.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000); 
    setTimeout(function(){
        alert("sigues ahi?")
    }, 10000); 

    document.addEventListener("scroll", eventoScroll);
});



function ejecutarForm(event){
	event.preventDefault()
	document.getElementById("infoForm").submit();
}

function mostrarPagina(){
	document.getElementById('pre-page').style.display = 'none';
}

function operacionSeleccionada(){
	var el = document.getElementById("operacionSelector")
	var input = document.getElementById("inputSeleccionado")
	var tipo_op = el.value

	input.innerHTML = `
					<label for="`+tipo_op+`"> Escribe el codigo de tu `+tipo_op+`:</label>
                    <input type="text" id="`+tipo_op+`" name="`+tipo_op+`">
                	`
	if(el.value === ""){
		input.innerHTML = ""
	}
}

function validaFecha(){
	var el = document.getElementById("fecha")
	var date = new Date()
	var string_fecha = el.value.replaceAll("-","");
	var month = parseInt(date.getMonth()) + 1 < 10 ? "0" + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1 
	var today ="" + date.getFullYear() + "" + month + ""+ date.getDate()
	console.log(string_fecha,today)
	if(today>string_fecha){
		alert("Ya paso la fecha");
		el.value=""
	}
}

function aceptarCockie(){
	var pop_up = document.getElementById("coockie-pop")
	pop_up.style.display = 'none'
	document.removeEventListener('scroll', eventoScroll);
}