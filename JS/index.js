let seguir;

do{let componente = prompt("seleccione el componente que desea adquirir:(gpu, mother,gabinete,hdd,ssd,ram,fuente)");

let cantidad =prompt("cuantos quiere?");{
    if(componente === "gpu" || "GPU" ) {console.log("valor total:" + 50 * cantidad)}
else if(componente === "mother"){console.log("valor total:" + 30 * cantidad)}
else if(componente === "gabinete"){console.log("valor total:" + 25 * cantidad)}
else if(componente === "hdd"){console.log("valor total:" + 10 * cantidad)}
else if(componente === "ssd"){console.log("valor total:" + 15 * cantidad)}
else if(componente === "ram"){console.log("valor total:" + 5 * cantidad)}
else if(componente === "fuente"){console.log("valor total:" + 20 * cantidad) }
else{console.log("componente no encontrado")
}
}let continuar = prompt("desea continuar comprando? si/no")
if (continuar === "si"){seguir = true}else{seguir =false}
}while(seguir)
