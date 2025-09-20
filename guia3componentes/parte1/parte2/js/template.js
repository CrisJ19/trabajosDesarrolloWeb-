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
        titulo: "Mouse RAZER BASILISK V3", 
        desc: "Ratón para juegos ultrapersonalizable con 10+1 botones programables, una rueda inclinable Razer™ HyperScroll inteligente y una buena dosis de Razer Chroma™", 
        price: 472000, 
        image: "https://assets2.razerzone.com/pages/basilisk-v3-4D578898E8144Le8da21dde32b7a9f5f/basiliskv3_button-config_ApexLegends.jpg" 
    },
    { 
        titulo: "Logitech G PRO X 2 LIGHTSPEED Wireless", 
        desc: "Los Logitech G PRO X 2 LIGHTSPEED Wireless son la nueva generación de auriculares para gaming Logitech G PRO X WIRELESS LIGHTSPEED . Estos auriculares actualizados incorporan funciones adicionales como Bluetooth y compatibilidad con cable, una batería con una duración mejorada y características de comodidad como auriculares giratorios. Logitech también ha reajustado el sonido para ofrecer graves más potentes, lo que aporta mayor impacto, vibración y potencia a tu juego.", 
        price: 1100000, 
        image: "https://i.rtings.com/assets/products/9Ep3Q2x3/logitech-g-pro-x-2-lightspeed-wireless/design-medium.jpg?format=auto" 
    },
    { 
        titulo: "Cooler Master Masteraccessory MP750", 
        desc: " Alfombrilla de mouse suave M con superficie resistente al agua y bordes RGB gruesos", 
        price: 189900, 
        image: "https://m.media-amazon.com/images/I/51BrQvzqN2L._AC_SY355_.jpg" 
    },
    { 
        titulo: "Licencia Windows 11 Pro", 
        desc: "Windows 11 Pro ofrece seguridad avanzada, rendimiento optimizado y herramientas empresariales. Licencia digital vitalicia para 1 PC.", 
        price: 139900, 
        image: "https://tauretcomputadores.com/images/products/Product_202301201805592070969202.Windows.webp" 
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