let travels = [
    {
        id: 1,
        name:"Tanzania",
        days: 14,
        price: "1999€", 
        poster: "imagen",
        continent: "Africa",
        rating: 4.6,
        reviews: [
    {
      author: "Constan Rivera",
      comment: "Un viaje espectacular, un sueño hecho realidad. ¡Repetiría sin dudarlo!",
    },
    {
      author: "Ricardo Navas",
      comment: "Es una experiencia increible, los alojamientos, las costumbres, guíás.. Volvería con WildSoul son fantásticos.",
    }
    ]
    },
    {
        id: 2,
        name:"New york",
        days: 8,
        price: "1590€", 
        poster:"imagen",
        continent: "America",
        rating: 4.3,
        reviews: [
    {
      author: "Elena Matias",
      comment: "Un viaje espectacular, en navidad es increible esto. ¡Repetiría el viaje con WildSoul!",
    },
    {
      author: "Carlos Reina",
      comment: "Esta agencia se encarga hasta del último detalle es un placer viajar con ellos.",
    }
    ]
    },
    {
        id: 3,
        name:"Sri Lanka",
        days: 10,
        price: "1085€", 
        poster: "imagen",
        continent:"Asia",
        rating: 4.5,
        reviews: [
    {
      author: "Juan Luna",
      comment: "Impresionado con esta agencia , ni un pero todo estupendo, nos ha encantado el viaje.",
    },
    {
      author: "Sergio Yegua",
      comment: "La guía fue fantástica, la agencia nos ayudo en un problema que tuvimos, las excursiones increíbles.",
    }
    ]
    },
    {
        id: 4,
        name:"Tailandia",
        days: 9,
        price: "1099€", 
        poster: "https://depositphotos.com/photo/elephant-at-wat-chaiwatthanaram-temple-in-ayuthaya-historical-park-a-unesco-world-heritage-site-thailand-154201984.html",
        continent: "Asia",
        rating: 4.2,
        reviews: [
    {
      author: "Pablo Lomas",
      comment: "Un viaje para volver, muy organizado y genial. ¡Volvería con ellos!",
    },
    {
      author: "Salma Torres",
      comment: "La guía fue fantástica, los hoteles, la gente de allí y las excursiones fantásticas.",
    }
    ]
     
    },
    {
        id: 5,
        name:"Egipto",
        days: 9,
        price: "1080€", 
        poster: "imagen",
        continent: "Africa",
        rating: 4.7,
        reviews: [
    {
      author: "Susana Romo ",
      comment: "Un viaje espectacular, impresionada por las pirámides y muy organizado. ¡Repetiría sin dudar!",
    },
    {
      author: "Fernando Camas",
      comment: "Las guias, los hoteles, la comida y las excursiones increíbles.",
    }
    ]
    },
    {
        id: 6,
        name:"Londres",
        days: 5,
        price: "489€", 
        poster: "imagen",
        continent: "Europa",
        rating: 4.6,
        reviews: [
    {
      author: "Carlos Salle",
      comment: "Un viaje asombroso, IMPRESIONADO. ¡Repetiría sin duda con WildSoul!",
    },
    {
      author: "Carmen Díaz",
      comment: "Los típicos fondos londinenses, la guardia real , el hotel y los guias fenomenal , un acierto esta agencia.",
    }
    ]
    },
    {
        id: 7,
        name:"Maldivas",
        days: 7,
        price: "1185€", 
        poster: "imagen",
        continent: "Asia",
        rating: 4.9,
        reviews: [
    {
      author: "Raúl García",
      comment: "Un viaje increible, las Maldivas son de ensueño. ¡Repetiría sin duda con ellos!",
    },
    {
      author: "Vero Ferrán",
      comment: "MEJOR IMPOSIBLE, este viaje es alucinante y los guias maravillosos.",
    }
    ]
    },
    {
        id: 8,
        name:"Perú",
        days: 9,
        price: "2105€", 
        poster: "imagen",
        continent: "America",
        rating: 4.1,
        reviews: [
    {
      author: "Lourdes Martínez",
      comment: "Una experiencia inolvidable",
    },
    {
      author: "Miguel Ruiz",
      comment: "El guía fue fantástica y las excuersiones muy amenas y lugares fascinantes.",
    }
    ]
    },
    {
        id: 9,
        name:"Australia",
        days: 13,
        price: "2580€", 
        poster: "imagen",
        continent:"Oceanía",
        rating: 4.3,
        reviews: [
    {
      author: "Lucas Tena",
      comment: "inmejorable, muy organizado, vuelvo encantado.",
    },
    {
      author: "Rosario López",
      comment: "Nos ha encantado este país y el viaje lo bien que estaba todo.",
    }
    ]
    },
    {
        id: 10,
        name:"Nueva Zelanda",
        days: 14,
        price: "3050€", 
        poster: "imagen",
        continent:"Oceanía",
        rating: 4.7,
        reviews: [
    {
      author: "Luis Cantero",
      comment: "Lo mejor los lugares que visitamos, muy organizado y gente muy amable. ¡Volveremos a repetir con Viajes WildSoul!",
    },
    {
      author: "Lara Meca",
      comment: "La guía encantadora y las excursiones increíbles, me encantaría volver.",
    }
    ]
    },
    {
        id: 11,
        name:"Budapest",
        days: 4,
        price: "380€", 
        poster: "imagen",
        continent:"Europa",
        rating: 4.5,
        reviews: [
    {
      author: "Laura Martínez",
      comment: "Un viaje espectacular, muy organizado. ¡Repetiría sin duda!",
    },
    {
      author: "Carlos Ruiz",
      comment: "La guía fue fantástica y las excursiones increíbles.",
    }
    ]
    },
    {
        id: 12,
        name:"Islandia",
        days: 9,
        price: "1040€", 
        poster: "imagen",
        continent:"Europa",
        rating: 4.8,
        reviews: [
    {
      author: "Javier Acosta",
      comment: "Un viaje increible, disfrutamos de los paisajes... Los hoteles excepcionales y la organizacion de WilSoul maravillosa . ¡Repetiría sin dudarlo!",
    },
    {
      author: "Gema Mercantes",
      comment: "La guía, la comida y los paisajes...Hemos venido enamorados!!.",
    }
    ]
    },
]

export const getTravels = () => travels;
export const getTravel = id => travels.find(travel => travel.id.toString()=== id)
export const deleteTravel = async (id) => travels = travels.filter(
    travel => travel.id !== id
)