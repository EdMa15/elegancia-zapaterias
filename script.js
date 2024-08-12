function sendMessage(modelo, marca, precio){
    const numero = "525636933820";
    const mensaje = "Hola, revisé su página y estoy interesado en recibir más información sobre uno de sus productos"+"\nMarca: "+marca+"\nModelo: "+modelo+"\nPrecio: "+precio+"\n\n¿Podrían darme más información por favor?\n Lo busco con las siguientes características\nEscribe Talla y color: ";
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}