const urlApex = "https://gedc07c6509dfcc-db.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client"

function peticionGet() {
    $.ajax({
        url: urlApex,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let numreg = data.count
            let productos = data.items
            console.log(numreg)
            console.log(productos)
            console.log("***************************************");
            for (i = 0; i < numreg; i++) {
                console.log("Producto " + (i + 1))
                console.log("Codigo " + productos[i].codprod)
                console.log("Nombre " + productos[i].nomprod)
                console.log("Precio " + productos[i].precio)
                console.log("Inventario " + productos[i].inventario)
            }
        },
        error: function() {

        },
        complete: function() {

        }

    });
}

function peticionPost(codprode, nomprode, precioe, inventarioe) {

    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'POST',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response) {
            if (response.status == 555) {
                alert("Registro Existe!!")
            } else if (response.status == 201) {
                alert("Guardo con Exito!!")
            }
            console.log(response.status)
        }
    });

    console.log(json)
}


function peticionPut(codprode, nomprode, precioe, inventarioe) {

    const dataSend = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'PUT',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response) {
            if (response.status == 201) {
                alert("Edito con Exito!!")
            }
            console.log(response.status)
        }
    });

    console.log(json)
}


function peticionDelete(codprode) {

    const dataSend = {
        codprod: codprode
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'DELETE',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response) {
            if (response.status == 204) {
                alert("Elimino con Exito!!")
            }
            console.log(response.status)
        }
    });
    console.log(json)
}