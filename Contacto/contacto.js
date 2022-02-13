function Enviar() {
    var txtnombre = document.getElementById("nombre");
    var txtcorreo = document.getElementById("correo");
    var numero = document.getElementById("numero");


    if (txtnombre.value == "") {
        alert("Por favor ingrese su nombre");
    } else {
        if (txtcorreo.value == "") {
            alert("Por favor ingrese su correo");
        } else {
            if (numero.value == "") {
                alert("Por favor ingrese su numero");
            } else {
                alert("Datos Registrados:D\nSe ha creado la peticion para "+ txtnombre.value+ " con el correo "+txtcorreo.value+" y el numero "+numero.value);
            }
        }
    }
}

