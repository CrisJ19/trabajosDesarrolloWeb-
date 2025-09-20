const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { 
        titulo: "Laptop para juegos Alienware M18 R2", 
        desc: "32GB RAMㅤㅤi9-14900HXㅤ165HzㅤㅤPantalla de 18 QHD+ㅤㅤRTX 4080 12GB GDDR6", 
        price: 1468500, 
        image: "https://m.media-amazon.com/images/I/71cXdhZg-BL.jpg" 
    },
    { 
        titulo: "Mouse", 
        desc: "Inalámbrico", 
        price: 29.99, 
        image: "https://example.com/images/mouse.jpg" 
    },
    { 
        titulo: "Teclado", 
        desc: "Mecánico RGB", 
        price: 79.99, 
        image: "https://example.com/images/keyboard.jpg" 
    },
    { 
        titulo: "Monitor", 
        desc: "27 pulgadas 4K", 
        price: 349.99, 
        image: "https://example.com/images/monitor.jpg" 
    },
    { 
        titulo: "Auriculares", 
        desc: "Cancelación de ruido", 
        price: 129.99, 
        image: "https://example.com/images/headphones.jpg" 
    }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = `$${producto.price.toFixed(2)}`;
    clon.querySelector(".image").src = producto.image;
    contenedor.appendChild(clon);
});