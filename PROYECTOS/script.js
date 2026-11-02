const modelos = [
  { nombre: "Creta", nombreVisible: "CRETA CONFORT", tipo: "SUV COMPACTA", etiqueta: "LA FAVORITA", descripcion: "Diseño moderno, tecnología y comodidad para todos tus días.", imagen: "creta-hyundai.png", alt: "Hyundai Creta exhibida en un salón", precioContado: "US$ 22.990", cuotaDesde: "G. 3.000.000", financiacionEtiqueta: "CRÉDITO DESDE", fotos: ["creta-hyundai.png", "WhatsApp Image 2026-10-27 at 07.38.40.jpeg", "WhatsApp Image 2026-10-27 at 07.38.41.jpeg", "WhatsApp Image 2026-10-27 at 07.38.41 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.42.jpeg", "WhatsApp Image 2026-10-27 at 07.38.42 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.43.jpeg", "WhatsApp Image 2026-10-27 at 07.38.43 (1).jpeg"] },
  { nombre: "HB20", nombreVisible: "HB20 HATCHBACK", tipo: "HATCHBACK", etiqueta: "ÁGIL Y VERSÁTIL", descripcion: "Un compañero urbano con estilo, conectividad y gran personalidad.", imagen: "WhatsApp Image 2026-10-27 at 07.38.35 (1).jpeg", alt: "Hyundai HB20 blanco exhibido en un salón", precioContado: "US$ 14.990", cuotaDesde: "G. 2.030.000", fotos: ["WhatsApp Image 2026-10-27 at 07.38.35 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.37.jpeg", "WhatsApp Image 2026-10-27 at 07.38.39.jpeg"] },
  { nombre: "Tucson", nombreVisible: "TUCSON LIMITED", tipo: "SUV", etiqueta: "ESPACIO Y DISEÑO", descripcion: "Espacio para compartir nuevas experiencias y llegar más lejos.", imagen: "WhatsApp Image 2026-10-27 at 07.38.44.jpeg", alt: "Hyundai Tucson Limited", precioContado: "US$ 40.990", cuotaDesde: "G. 5.400.000", financiacionEtiqueta: "CUOTAS DESDE", fotos: ["WhatsApp Image 2026-10-27 at 07.38.44.jpeg", "WhatsApp Image 2026-10-27 at 07.38.44 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.45.jpeg", "WhatsApp Image 2026-10-27 at 07.38.45 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.45 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.46.jpeg", "WhatsApp Image 2026-10-27 at 07.38.46 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.46 (2).jpeg"] },
  { nombre: "Santa Fe", nombreVisible: "SANTA FE 2027", tipo: "SUV FAMILIAR", etiqueta: "PARA COMPARTIR", descripcion: "Confort y presencia para disfrutar cada viaje en familia.", imagen: "santa-fe-hyundai.png", alt: "Hyundai Santa Fe 2027 blanco junto al campo", precioContado: "US$ 45.990", cuotaDesde: "G. 6.000.000", financiacionEtiqueta: "CUOTAS DESDE", fotos: ["santa-fe-hyundai.png", "WhatsApp Image 2026-10-27 at 07.38.51.jpeg", "WhatsApp Image 2026-10-27 at 07.38.52 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.52 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.52.jpeg", "WhatsApp Image 2026-10-27 at 07.38.53 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.53 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.54.jpeg", "WhatsApp Image 2026-10-27 at 07.38.54 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.55.jpeg"] },
  { nombre: "Kona", nombreVisible: "KONA", tipo: "SUV URBANA", etiqueta: "ESPÍRITU URBANO", descripcion: "Carácter propio y versatilidad para moverte a tu manera.", imagen: "WhatsApp Image 2026-10-27 at 07.38.48.jpeg", alt: "Hyundai Kona", precioContado: "US$ 31.990", cuotaDesde: "G. 4.200.000", financiacionEtiqueta: "CUOTAS DESDE", fotos: ["WhatsApp Image 2026-10-27 at 07.38.48.jpeg", "WhatsApp Image 2026-10-27 at 07.38.48 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.48 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.48 (3).jpeg", "WhatsApp Image 2026-10-27 at 07.38.49.jpeg", "WhatsApp Image 2026-10-27 at 07.38.49 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.49 (2).jpeg", "WhatsApp Image 2026-10-27 at 07.38.50.jpeg", "WhatsApp Image 2026-10-27 at 07.38.50 (1).jpeg", "WhatsApp Image 2026-10-27 at 07.38.50 (2).jpeg"] },
  { nombre: "Grand i10", nombreVisible: "GRAND I10", tipo: "COMPACTO", etiqueta: "HECHO PARA VOS", descripcion: "Práctico, cómodo y listo para acompañarte en la ciudad.", imagen: "WhatsApp Image 2026-10-30 at 22.34.11 (1).jpeg", alt: "Hyundai Grand i10 blanco exhibido en un salón", precioContado: "US$ 13.600", fotos: ["WhatsApp Image 2026-10-30 at 22.34.11 (1).jpeg", "WhatsApp Image 2026-10-30 at 22.34.11 (2).jpeg", "WhatsApp Image 2026-10-30 at 22.34.11 (3).jpeg", "WhatsApp Image 2026-10-30 at 22.34.11 (4).jpeg", "WhatsApp Image 2026-10-30 at 22.34.11.jpeg"] }
];

const modelosGeely = [
  { nombre: "GX3 Pro", nombreVisible: "GEELY GX3 PRO", marca: "Geely", tipo: "SUV COMPACTA", etiqueta: "GEELY GX3 PRO", descripcion: "Diseño moderno, confort y versatilidad para tus recorridos diarios.", imagen: "WhatsApp Image 2026-10-30 at 18.57.54 (1).jpeg", alt: "Geely GX3 Pro negro exhibido en un salón", precioContado: "US$ 15.490", fotos: ["WhatsApp Image 2026-10-30 at 18.57.54 (1).jpeg", "WhatsApp Image 2026-10-30 at 18.57.54.jpeg", "WhatsApp Image 2026-10-30 at 18.57.54 (2).jpeg", "WhatsApp Image 2026-10-30 at 18.57.55.jpeg", "WhatsApp Image 2026-10-30 at 18.57.55 (1).jpeg", "WhatsApp Image 2026-10-30 at 18.57.56 (2).jpeg", "WhatsApp Image 2026-10-30 at 18.57.56.jpeg", "WhatsApp Image 2026-10-30 at 18.57.56 (1).jpeg"] },
  { nombre: "Coolray Lite", nombreVisible: "GEELY COOLRAY LITE", marca: "Geely", tipo: "SUV COMPACTA", etiqueta: "NUEVO MODELO", descripcion: "Estilo deportivo, espacio y tecnología para acompañarte en cada recorrido.", imagen: "WhatsApp Image 2026-10-30 at 18.58.11 (1).jpeg", alt: "Geely Coolray Lite gris exhibido en un salón", precioContado: "US$ 17.990", fotos: ["WhatsApp Image 2026-10-30 at 18.58.11 (1).jpeg", "WhatsApp Image 2026-10-30 at 18.58.11.jpeg", "WhatsApp Image 2026-10-30 at 18.58.11 (2).jpeg", "WhatsApp Image 2026-10-30 at 18.58.12.jpeg", "WhatsApp Image 2026-10-30 at 18.58.12 (1).jpeg"] }
];

const modelosIsuzu = [
  { nombre: "D-MAX", nombreVisible: "ISUZU D-MAX", marca: "Isuzu", tipo: "PICK-UP DOBLE CABINA", etiqueta: "ISUZU D-MAX", descripcion: "Fuerza, espacio y capacidad para acompañarte en el trabajo y la aventura.", imagen: "WhatsApp Image 2026-10-30 at 18.58.48.jpeg", alt: "Isuzu D-MAX plateada exhibida en un salón", fotos: ["WhatsApp Image 2026-10-30 at 18.58.48.jpeg", "WhatsApp Image 2026-10-30 at 18.58.47.jpeg", "WhatsApp Image 2026-10-30 at 18.58.46.jpeg", "WhatsApp Image 2026-10-30 at 18.58.47 (2).jpeg", "WhatsApp Image 2026-10-30 at 18.58.47 (1).jpeg", "WhatsApp Image 2026-10-30 at 18.58.48 (1).jpeg", "WhatsApp Image 2026-10-30 at 18.58.49.jpeg", "WhatsApp Image 2026-10-30 at 18.58.50 (1).jpeg"] },
  { nombre: "MU-X", nombreVisible: "ISUZU MU-X", marca: "Isuzu", tipo: "SUV", etiqueta: "ISUZU MU-X", descripcion: "Diseño, espacio y versatilidad para disfrutar cada recorrido.", imagen: "WhatsApp Image 2026-10-30 at 22.39.21.jpeg", alt: "Isuzu MU-X plateada exhibida en un salón", fotos: ["WhatsApp Image 2026-10-30 at 22.39.21.jpeg", "WhatsApp Image 2026-10-30 at 22.39.20.jpeg", "WhatsApp Image 2026-10-30 at 22.39.21 (1).jpeg", "WhatsApp Image 2026-10-30 at 22.39.21 (2).jpeg", "WhatsApp Image 2026-10-30 at 22.39.21 (3).jpeg", "WhatsApp Image 2026-10-30 at 22.39.21 (4).jpeg"] }
];

const modelosPorMarca = { Hyundai: modelos, Geely: modelosGeely, Isuzu: modelosIsuzu };

const imagenesPortada = new Map([
  ["Creta", "creta-hyundai.png"],
  ["HB20", "WhatsApp Image 2026-10-27 at 07.38.35 (1).jpeg"],
  ["Tucson", "WhatsApp Image 2026-10-27 at 07.38.46.jpeg"],
  ["Santa Fe", "santa-fe-hyundai.png"],
  ["Kona", "kona-portada.png"],
  ["Grand i10", "WhatsApp Image 2026-10-30 at 22.34.11 (1).jpeg"]
]);

const rejilla = document.getElementById("rejillaModelos");
const selectorModelo = document.getElementById("modeloConsulta");
let marcaActiva = "Hyundai";
const tabs = [...document.querySelectorAll(".pestana")];
const camposFinanciacion = document.getElementById("camposFinanciacion");
let tipoConsulta = "contado";
const galeriaModal = document.getElementById("galeriaModal");
const fotoGrande = document.getElementById("fotoGrande");
const miniaturasModal = document.getElementById("miniaturasModal");
const contadorFotosModal = document.getElementById("contadorFotosModal");
let fotosModalActuales = [];
let indiceModalActual = 0;
let nombreGaleriaActual = "Hyundai";
let marcaGaleriaActual = "Hyundai";

function actualizarGaleriaModal() {
  fotoGrande.src = fotosModalActuales[indiceModalActual];
  fotoGrande.alt = `${marcaGaleriaActual} ${nombreGaleriaActual}, foto ${indiceModalActual + 1} de ${fotosModalActuales.length}`;
  contadorFotosModal.textContent = `${indiceModalActual + 1} / ${fotosModalActuales.length}`;
  miniaturasModal.replaceChildren();
  fotosModalActuales.forEach((src, indice) => {
    const miniatura = document.createElement("button");
    miniatura.className = "miniatura-modal";
    miniatura.type = "button";
    miniatura.setAttribute("aria-label", `Ver foto ${indice + 1} del ${marcaGaleriaActual} ${nombreGaleriaActual}`);
    miniatura.setAttribute("aria-current", String(indice === indiceModalActual));
    const imagenMiniatura = document.createElement("img");
    imagenMiniatura.src = src;
    imagenMiniatura.alt = "";
    miniatura.appendChild(imagenMiniatura);
    miniatura.addEventListener("click", () => {
      indiceModalActual = indice;
      actualizarGaleriaModal();
    });
    miniaturasModal.appendChild(miniatura);
  });
}

function abrirGaleriaModal(nombreModelo, fotos, indiceInicial, marcaModelo = "Hyundai") {
  nombreGaleriaActual = nombreModelo;
  marcaGaleriaActual = marcaModelo;
  galeriaModal.setAttribute("aria-label", `Galería de fotos del ${marcaModelo} ${nombreModelo}`);
  document.getElementById("nombreGaleriaModal").textContent = `${marcaModelo} ${nombreModelo}`;
  fotosModalActuales = fotos;
  indiceModalActual = indiceInicial;
  actualizarGaleriaModal();
  galeriaModal.showModal();
}

function moverGaleriaModal(direccion) {
  indiceModalActual = (indiceModalActual + direccion + fotosModalActuales.length) % fotosModalActuales.length;
  actualizarGaleriaModal();
}

document.getElementById("cerrarGaleria").addEventListener("click", () => galeriaModal.close());
document.getElementById("fotoAnteriorModal").addEventListener("click", () => moverGaleriaModal(-1));
document.getElementById("fotoSiguienteModal").addEventListener("click", () => moverGaleriaModal(1));
galeriaModal.addEventListener("click", (evento) => {
  if (evento.target === galeriaModal) galeriaModal.close();
});

function actualizarPrecioReferencia() {
  const modelo = Object.values(modelosPorMarca).flat().find((item) => item.nombre === selectorModelo.value);
  const referencia = document.getElementById("precioReferencia");
  if (modelo?.precioContado || modelo?.cuotaDesde) {
    const precios = [modelo.precioContado && `Contado ${modelo.precioContado}`, modelo.cuotaDesde && `${modelo.financiacionEtiqueta || "Cuota desde"} ${modelo.cuotaDesde}`].filter(Boolean);
    referencia.textContent = `${modelo.nombreVisible || modelo.nombre} · ${precios.join(" · ")}`;
    referencia.hidden = false;
  } else {
    referencia.textContent = "";
    referencia.hidden = true;
  }
}

function mostrarModelos(modelosVisibles = modelos) {
  rejilla.replaceChildren();
  selectorModelo.replaceChildren(new Option("Seleccioná un modelo", ""));
  if (!modelosVisibles.length) {
    const aviso = document.createElement("article");
    aviso.className = "catalogo-vacio";
    aviso.innerHTML = `<span class="catalogo-vacio-icono">✳</span><p class="eyebrow eyebrow-oscuro">CATÁLOGO ${marcaActiva.toUpperCase()}</p><h3>Consultá los modelos disponibles</h3><p>Estamos preparando la galería de ${marcaActiva}. Escribile a Deyci y te comparte las opciones, fotos y precios disponibles.</p><a class="boton boton-azul consultar-marca" href="https://wa.me/595976791413">Consultar ${marcaActiva} por WhatsApp <span>↗</span></a>`;
    rejilla.appendChild(aviso);
    return;
  }
  modelosVisibles.forEach((modelo) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "modelo-card";
    const imagenWrap = document.createElement("div");
    imagenWrap.className = "modelo-imagen";
    const fotos = modelo.fotos || [modelo.imagen];
    let indiceFoto = 0;
    let precioImagen = null;
    let temporizadorPrecio;
    const mostrarPrecioTemporal = () => {
      if (!precioImagen) return;
      window.clearTimeout(temporizadorPrecio);
      precioImagen.classList.add("precio-visible");
      temporizadorPrecio = window.setTimeout(() => precioImagen.classList.remove("precio-visible"), 2500);
    };
    const imagen = document.createElement("img");
    imagen.src = fotos[indiceFoto];
    imagen.alt = modelo.alt;
    imagen.loading = "lazy";
    imagen.onerror = () => { imagen.src = "https://placehold.co/1000x650/e7edf2/15385a?text=" + encodeURIComponent(`${modelo.marca || "Hyundai"} ${modelo.nombre}`); };
    const etiqueta = document.createElement("span");
    etiqueta.className = "modelo-tag";
    etiqueta.textContent = modelo.etiqueta;
    imagenWrap.append(imagen, etiqueta);
    if (modelo.precioContado || modelo.cuotaDesde) {
      precioImagen = document.createElement("div");
      precioImagen.className = "precio-imagen";
      if (modelo.precioContado) {
        const contado = document.createElement("span");
        const etiquetaContado = document.createElement("small");
        etiquetaContado.textContent = "CONTADO";
        const valorContado = document.createElement("strong");
        valorContado.textContent = modelo.precioContado;
        contado.append(etiquetaContado, valorContado);
        precioImagen.append(contado);
      }
      if (modelo.cuotaDesde) {
        const financiado = document.createElement("span");
        const etiquetaCuota = document.createElement("small");
        etiquetaCuota.textContent = modelo.financiacionEtiqueta || "CUOTA DESDE";
        const valorCuota = document.createElement("strong");
        valorCuota.textContent = modelo.cuotaDesde;
        financiado.append(etiquetaCuota, valorCuota);
        precioImagen.append(financiado);
      }
      imagenWrap.appendChild(precioImagen);
      if (imagen.complete && imagen.naturalWidth > 0) {
        mostrarPrecioTemporal();
      } else {
        imagen.addEventListener("load", mostrarPrecioTemporal, { once: true });
      }
    }
    if (fotos.length > 1) {
      const controlesGaleria = document.createElement("div");
      controlesGaleria.className = "galeria-controles";
      const anterior = document.createElement("button");
      anterior.className = "galeria-flecha";
      anterior.type = "button";
      anterior.textContent = "‹";
      anterior.setAttribute("aria-label", `Ver foto anterior del ${modelo.marca || "Hyundai"} ${modelo.nombre}`);
      const pagina = document.createElement("span");
      pagina.className = "galeria-pagina";
      pagina.textContent = `1 / ${fotos.length}`;
      const siguiente = document.createElement("button");
      siguiente.className = "galeria-flecha";
      siguiente.type = "button";
      siguiente.textContent = "›";
      siguiente.setAttribute("aria-label", `Ver foto siguiente del ${modelo.marca || "Hyundai"} ${modelo.nombre}`);
      const cambiarFoto = (direccion) => {
        indiceFoto = (indiceFoto + direccion + fotos.length) % fotos.length;
        window.clearTimeout(temporizadorPrecio);
        precioImagen?.classList.remove("precio-visible");
        imagen.classList.add("cambiando");
        window.setTimeout(() => {
          imagen.addEventListener("load", () => {
            imagen.classList.remove("cambiando");
            mostrarPrecioTemporal();
          }, { once: true });
          imagen.src = fotos[indiceFoto];
          imagen.alt = `${modelo.marca || "Hyundai"} ${modelo.nombre}, foto ${indiceFoto + 1} de ${fotos.length}`;
          pagina.textContent = `${indiceFoto + 1} / ${fotos.length}`;
        }, 320);
      };
      anterior.addEventListener("click", () => cambiarFoto(-1));
      siguiente.addEventListener("click", () => cambiarFoto(1));
      controlesGaleria.append(anterior, pagina, siguiente);
      imagenWrap.appendChild(controlesGaleria);
      window.setInterval(() => cambiarFoto(1), 4800);
    }
    if (fotos.length > 1) {
      imagen.classList.add("imagen-ampliable");
      imagen.setAttribute("role", "button");
      imagen.setAttribute("tabindex", "0");
      imagen.setAttribute("aria-label", `Abrir catálogo de fotos del ${modelo.marca || "Hyundai"} ${modelo.nombre}`);
      imagen.addEventListener("click", () => abrirGaleriaModal(modelo.nombreVisible || modelo.nombre, fotos, indiceFoto, modelo.marca || "Hyundai"));
      imagen.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          abrirGaleriaModal(modelo.nombreVisible || modelo.nombre, fotos, indiceFoto, modelo.marca || "Hyundai");
        }
      });
    }
    const info = document.createElement("div");
    info.className = "modelo-info";
    const tipo = document.createElement("p");
    tipo.className = "modelo-tipo";
    tipo.textContent = modelo.tipo;
    const nombre = document.createElement("h3");
    nombre.textContent = modelo.nombreVisible || modelo.nombre;
    const descripcion = document.createElement("p");
    descripcion.textContent = modelo.descripcion;
    const pie = document.createElement("div");
    pie.className = "modelo-pie";
    const disponibilidad = document.createElement("span");
    disponibilidad.className = "modelo-disponible";
    disponibilidad.textContent = "Precio a consultar";
    const boton = document.createElement("button");
    boton.className = "modelo-consultar";
    boton.type = "button";
    boton.textContent = "Consultar →";
    boton.addEventListener("click", () => {
      selectorModelo.value = modelo.nombre;
      actualizarPrecioReferencia();
      document.getElementById("consulta").scrollIntoView({ behavior: "smooth" });
      selectorModelo.focus({ preventScroll: true });
    });
    pie.append(disponibilidad, boton);
    info.append(tipo, nombre, descripcion, pie);
    tarjeta.append(imagenWrap, info);
    rejilla.appendChild(tarjeta);
    const opcion = document.createElement("option");
    opcion.value = modelo.nombre;
    opcion.textContent = `${modelo.nombreVisible || modelo.nombre} · ${modelo.tipo}`;
    selectorModelo.appendChild(opcion);
  });
}

function cambiarTipo(tipo) {
  tipoConsulta = tipo;
  const financiado = tipo === "financiado";
  tabs.forEach((tab) => {
    const activa = tab.dataset.tipo === tipo;
    tab.classList.toggle("activa", activa);
    tab.setAttribute("aria-selected", String(activa));
  });
  document.getElementById("panelCompra").setAttribute("aria-labelledby", financiado ? "tabFinanciado" : "tabContado");
  document.getElementById("tipoEyebrow").textContent = financiado ? "COMPRA A CRÉDITO" : "COMPRA AL CONTADO";
  document.getElementById("tipoTitulo").textContent = financiado ? "Armemos tu plan." : "¿Qué modelo te interesa?";
  document.getElementById("tipoDescripcion").textContent = financiado
    ? "Contame qué modelo te interesa y qué entrega inicial tenés en mente. Consulto las opciones de crédito vigentes para vos."
    : "Consultá el precio contado y las versiones disponibles. Te respondo con los detalles.";
  camposFinanciacion.hidden = !financiado;
}

function mensajePresupuesto() {
  const nombre = document.getElementById("nombre").value.trim() || "(nombre pendiente)";
  const modelo = selectorModelo.value || "modelo por definir";
  const telefono = document.getElementById("contacto").value.trim() || "(teléfono pendiente)";
  const montoEntrega = document.getElementById("entrega").value.replace(/\D/g, "");
  const entrega = montoEntrega ? `G. ${new Intl.NumberFormat("es-PY").format(Number(montoEntrega))}` : "todavía no definida";
  return [
    `Hola Deyci, soy ${nombre}.`,
    `Quiero solicitar un presupuesto e información del ${marcaActiva} ${modelo}.`,
    `Mi opción de compra es ${tipoConsulta === "financiado" ? "a crédito" : "al contado"}.`,
    tipoConsulta === "financiado" ? `Mi entrega inicial aproximada es ${entrega}.` : "",
    `Mi teléfono de contacto es ${telefono}.`
  ].filter(Boolean).join(" ");
}

function abrirWhatsAppPresupuesto() {
  const url = `https://wa.me/595976791413?text=${encodeURIComponent(mensajePresupuesto())}`;
  window.location.assign(url);
}

tabs.forEach((tab) => tab.addEventListener("click", () => cambiarTipo(tab.dataset.tipo)));
selectorModelo.addEventListener("change", actualizarPrecioReferencia);
const campoEntrega = document.getElementById("entrega");
campoEntrega.addEventListener("input", () => {
  const posicionCursor = campoEntrega.selectionStart ?? campoEntrega.value.length;
  const digitosAntesCursor = campoEntrega.value.slice(0, posicionCursor).replace(/\D/g, "").length;
  const digitos = campoEntrega.value.replace(/\D/g, "");
  const valorFormateado = digitos ? new Intl.NumberFormat("es-PY").format(Number(digitos)) : "";
  campoEntrega.value = valorFormateado;
  let posicionNueva = 0;
  let digitosContados = 0;
  while (posicionNueva < valorFormateado.length && digitosContados < digitosAntesCursor) {
    if (/\d/.test(valorFormateado[posicionNueva])) digitosContados++;
    posicionNueva++;
  }
  campoEntrega.setSelectionRange(posicionNueva, posicionNueva);
});
document.addEventListener("click", (evento) => {
  const enlaceWhatsApp = evento.target.closest("a.whatsapp-flotante, a.whatsapp-directo, a.consultar-marca");
  if (!enlaceWhatsApp) return;
  evento.preventDefault();
  abrirWhatsAppPresupuesto();
});
document.getElementById("formConsulta").addEventListener("submit", (evento) => {
  evento.preventDefault();
  abrirWhatsAppPresupuesto();
});

const menuToggle = document.getElementById("menuToggle");
const navegacion = document.getElementById("navegacion");
menuToggle.addEventListener("click", () => {
  const abierto = navegacion.classList.toggle("abierto");
  menuToggle.setAttribute("aria-expanded", String(abierto));
  menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = abierto ? "×" : "☰";
});
navegacion.querySelectorAll("a").forEach((enlace) => enlace.addEventListener("click", () => {
  navegacion.classList.remove("abierto");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.textContent = "☰";
}));

const botonesMarca = [...document.querySelectorAll(".filtro-marca")];
botonesMarca.forEach((boton) => boton.addEventListener("click", () => {
  marcaActiva = boton.dataset.marca;
  botonesMarca.forEach((opcion) => {
    const activa = opcion === boton;
    opcion.classList.toggle("activo", activa);
    opcion.setAttribute("aria-pressed", String(activa));
  });
  document.getElementById("marcaSeleccionada").textContent = `Catálogo ${marcaActiva}`;
  mostrarModelos(modelosPorMarca[marcaActiva] || []);
}));
mostrarModelos(modelos);

const fotosEntrega = [...document.querySelectorAll(".entrega-foto")];
const botonesEntrega = [...document.querySelectorAll(".entrega-indicadores button")];
let indiceEntregaActual = 0;
function mostrarFotoEntrega(indice) {
  indiceEntregaActual = indice;
  fotosEntrega.forEach((foto, posicion) => foto.classList.toggle("activa", posicion === indice));
  botonesEntrega.forEach((boton, posicion) => {
    boton.classList.toggle("activo", posicion === indice);
    boton.setAttribute("aria-pressed", String(posicion === indice));
  });
}
botonesEntrega.forEach((boton, indice) => boton.addEventListener("click", () => mostrarFotoEntrega(indice)));
if (fotosEntrega.length > 1) {
  window.setInterval(() => mostrarFotoEntrega((indiceEntregaActual + 1) % fotosEntrega.length), 5000);
}

const fondoHero = document.querySelector(".hero-fondo");
let indiceModeloHero = 0;
window.setInterval(() => {
  indiceModeloHero = (indiceModeloHero + 1) % modelos.length;
  fondoHero.style.opacity = "0.35";
  window.setTimeout(() => {
    const modeloPortada = modelos[indiceModeloHero];
    const imagenPortada = imagenesPortada.get(modeloPortada.nombre) || modeloPortada.imagen;
    fondoHero.style.setProperty("--hero-image", `url("${imagenPortada}")`);
    fondoHero.style.opacity = "1";
  }, 550);
}, 5000);

