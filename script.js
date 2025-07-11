const articulos = {
  1: {
    titulo: "Este video de agradecimiento a Petro por llegada de turbinas eólicas a La Guajira no es en Colombia",
    contenido: "Contenido completo de la noticia 1. Aquí se explica todo lo relevante..."
  },
  2: {
    titulo: "El Acuerdo de Pandemias no le da “control sin precedentes” al director de la OMS ni a Bill Gates sobre los procesos de la salud",
    contenido: "Aquí va todo el contenido de la segunda noticia. Detalles, contexto, etc..."
  },
  3: {
    titulo: "Gustavo Petro no concedió una entrevista sobre la fé a periodista ateo Alan Brooks",
    contenido: "Texto completo del artículo número 3, con todos sus datos."
  },
  4: {
    titulo: "Video falsifica con IA la voz de presentadores de Caracol para promover inversiones sospechosas",
    contenido: "Noticia 4 desarrollada completamente aquí con información adicional."
  }
};

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && articulos[id]) {
    document.getElementById("titulo").innerHTML = articulos[id].titulo;
    document.getElementById("contenido").innerHTML = articulos[id].contenido;
  } else {
    document.getElementById("titulo").innerHTML = "Artículo no encontrado";
    document.getElementById("contenido").innerHTML= "Lo sentimos, este artículo no existe.";
  }
};
function actualizarDivisasManual() {
    const fecha = new Date();
    
    // Valores de ejemplo (debes actualizarlos manualmente)
    const tasas = {
        USD: 3800 + Math.random() * 100, // Simula fluctuación
        EUR: 4500 + Math.random() * 100,
        GBP: 5200 + Math.random() * 100,
        fecha: fecha.toLocaleTimeString('es-CO')
    };
    
    document.getElementById('valor-usd').textContent = `$${tasas.USD.toFixed(2)} COP`;
    document.getElementById('valor-eur').textContent = `$${tasas.EUR.toFixed(2)} COP`;
    document.getElementById('valor-gbp').textContent = `$${tasas.GBP.toFixed(2)} COP`;
    document.getElementById('fecha-actualizacion').textContent = tasas.fecha;
}

// Actualizar cada minuto (simula cambio)
actualizarDivisasManual();
setInterval(actualizarDivisasManual, 60000);
// Reloj de Bogotá - Versión mejorada
function actualizarHoraBogota() {
    try {
        const opciones = {
            timeZone: 'America/Bogota',
            hour12: true, // Cambia a false si prefieres formato 24h
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const ahora = new Date();
        const horaBogota = ahora.toLocaleTimeString('es-CO', opciones);
        
        const elementoHora = document.getElementById('hora-bogota');
        if (elementoHora) {
            elementoHora.textContent = `${horaBogota} (Bogotá)`;
        }
    } catch (error) {
        console.error("Error al actualizar la hora:", error);
    }
}

// Iniciar el reloj cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    actualizarHoraBogota();
    setInterval(actualizarHoraBogota, 1000);
});
