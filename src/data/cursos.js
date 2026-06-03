/**
 * Base de datos de cursos de afiliación Hotmart.
 * Para añadir un curso: copia un objeto del array y rellena tus datos reales.
 * hotlink: tu URL de afiliado de Hotmart (formato https://go.hotmart.com/XXXX)
 */
export const cursos = [
  // --- CATEGORÍA 1: TÉCNICAS DE TENDENCIA ---
  {
    id: 'manicura-rusa-pro',
    categoria: 'tendencia',
    nombre: 'Manicura Rusa Profesional desde Cero',
    instructor: '',
    descripcion: 'Domina la técnica de cutícula perfecta que todas las clientas piden ahora mismo. Sin experiencia previa necesaria.',
    duracion: '',
    nivel: 'Principiante',
    precio: '',
    comision: '80%',
    estrellas: 4.8,
    alumnos: '',
    pros: [
      'Técnica de altísima demanda en salones',
      'Clases en video paso a paso',
      'Certificado al terminar',
    ],
    contras: [
      'Requiere kit de herramientas específico (no incluido)',
    ],
    imagen: '',
    hotlink: 'PEGAR_TU_HOTLINK_AQUI',
    destacado: true,
  },

  // --- CATEGORÍA 2: SISTEMAS DE EXTENSIÓN ---
  {
    id: 'unas-acrilicas-completo',
    categoria: 'extension',
    nombre: 'Uñas Acrílicas: Curso Completo Profesional',
    instructor: '',
    descripcion: 'Aprende a construir extensiones perfectas y duraderas que te generen ingresos desde el primer mes.',
    duracion: '',
    nivel: 'Principiante a Avanzado',
    precio: '',
    comision: '80%',
    estrellas: 4.7,
    alumnos: '',
    pros: [
      'Cubre acrílico, gel y polygel',
      'Acceso de por vida',
      'Comunidad privada de alumnas',
    ],
    contras: [
      'El material inicial tiene un coste de inversión',
    ],
    imagen: '',
    hotlink: 'PEGAR_TU_HOTLINK_AQUI',
    destacado: false,
  },

  // --- CATEGORÍA 3: EL NEGOCIO ---
  {
    id: 'negocio-unas-en-casa',
    categoria: 'negocio',
    nombre: 'Monta Tu Negocio de Uñas en Casa',
    instructor: '',
    descripcion: 'Estrategia completa: consigue tus primeras clientas, pon precios rentables y organiza tu agenda como una profesional.',
    duracion: '',
    nivel: 'Todos los niveles',
    precio: '',
    comision: '80%',
    estrellas: 4.9,
    alumnos: '',
    pros: [
      'Incluye plantillas de precios y contratos',
      'Marketing en redes para captar clientas locales',
      'Soporte directo con la instructora',
    ],
    contras: [
      'Más enfocado en gestión que en técnica',
    ],
    imagen: '',
    hotlink: 'PEGAR_TU_HOTLINK_AQUI',
    destacado: true,
  },
];

export const categorias = [
  {
    id: 'tendencia',
    nombre: 'Técnicas de Tendencia',
    descripcion: 'Manicura Rusa, Capping y las técnicas más solicitadas del mercado.',
    icono: '✨',
    color: 'rosa',
  },
  {
    id: 'extension',
    nombre: 'Sistemas de Extensión',
    descripcion: 'Uñas Acrílicas, Gel y Polygel. Los servicios mejor pagados del sector.',
    icono: '💅',
    color: 'dorado',
  },
  {
    id: 'negocio',
    nombre: 'El Negocio',
    descripcion: 'Monta tu salón en casa, consigue clientas y cobra lo que mereces.',
    icono: '🏠',
    color: 'rosa',
  },
];
