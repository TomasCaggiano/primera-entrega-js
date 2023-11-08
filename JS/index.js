let seguir;

do{let componente = prompt("seleccione el componente que desea adquirir:(gpu, mother,gabinete,hdd,ssd,ram,fuente)").toLowerCase();
if(componente === "gpu" || "mother" || "gabinete" || "hdd" || "ssd" || "ram" || "fuente"){ 
let cantidad =parseFloat(prompt("cuantos quiere?"));{
    if(componente === "gpu") {alert("valor total:" + 50 * cantidad)}
else if(componente === "mother"){alert("valor total:" + 30 * cantidad)}
else if(componente === "gabinete"){alert("valor total:" + 25 * cantidad)}
else if(componente === "hdd"){alert("valor total:" + 10 * cantidad)}
else if(componente === "ssd"){alert("valor total:" + 15 * cantidad)}
else if(componente === "ram"){alert("valor total:" + 5 * cantidad)}
else if(componente === "fuente"){alert("valor total:" + 20 * cantidad) }
else{alert("componente no encontrado")
}
}let continuar = prompt("desea continuar comprando? si/no")
if (continuar === "si"){seguir = true}else{seguir =false}
}}while(seguir)

function total(){
let totalcompra1 = parseFloat(prompt("introduzca el valor total de su primera compra: "));
let totalcompra2 = parseFloat(prompt("introduzca el valor total de su segunda compra: "));
let totalcompra = totalcompra1 + totalcompra2;
alert("el total de su compra es " + totalcompra );
}

total()