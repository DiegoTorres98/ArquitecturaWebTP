module.exports = function () {
  var data = {
    users: [
      {
        id: 1,
        name: 'Juan Quispe',
        phone: '999888777',
        dni: '78898765',
        department: 'Lima',
        district: 'San Miguel',
        address: 'Calle Carlos Fazco 398',
        email: 'juan_quispe@hotmail.com',
        password: 'juanseto01',
        birthday: '12/01/1998',
        sex: 'no especificar'
      }
    ],
    season_products: [
      {
        id: 1,
        title: 'Manzanas'
      },
      {
        id: 2,
        title: 'Platanos'
      },
      {
        id: 3,
        title: 'Lechugas'
      }
    ],
    products: [
      {
        id: 1,
        department: 'Lima',
        name: 'Manzana Chilena',
        products: ['Manzana Chilena', 'Naranja', 'Pepino'],
        minimum_kg: 30,
        amount_kg: 0,
        reservation: ''
      },
      {
        id: 2,
        department: 'Ica',
        name: 'Platano de Isla',
        products: ['Platano Isla', 'Lechuga', 'Tomate'],
        minimum_kg: 20,
        amount_kg: 0,
        reservation: ''
      },
      {
        id: 1,
        department: 'Amazonas',
        name: 'Lechuga Fresca',
        products: ['Lechuga Fresca', 'Camote', 'Papa'],
        minimum_kg: 30,
        amount_kg: 0,
        reservation: ''
      }
    ],
    departments: [
      {
        id: 1,
        name: "Amazonas"
      },
      {
        id: 2,
        name: "Áncash"
      },
      {
        id: 3,
        name: "Apurímac"
      },
      {
        id: 4,
        name: "Arequipa"
      },
      {
        id: 5,
        name: "Ayacucho"
      },
      {
        id: 6,
        name: "Cajamarca"
      },
      {
        id: 7,
        name: "Callao"
      },
      {
        id: 8,
        name: "Cusco"
      },
      {
        id: 9,
        name: "Huancavelica"
      },
      {
        id: 10,
        name: "Huánuco"
      },
      {
        id: 11,
        name: "Ica"
      },
      {
        id: 12,
        name: "Junín"
      },
      {
        id: 13,
        name: "La Libertad"
      },
      {
        id: 14,
        name: "Lambayeque"
      },
      {
        id: 15,
        name: "Lima"
      },
      {
        id: 16,
        name: "Loreto"
      },
      {
        id: 17,
        name: "Madre de Dios"
      },
      {
        id: 18,
        name: "Moquegua"
      },
      {
        id: 19,
        name: "Pasco"
      },
      {
        id: 20,
        name: "Piura"
      },
      {
        id: 21,
        name: "Puno"
      },
      {
        id: 22,
        name: "San Martín"
      },
      {
        id: 23,
        name: "Tacna"
      },
      {
        id: 24,
        name: "Tumbes"
      },
      {
        id: 25,
        name: "Ucayali"
      }
    ],    
    history_sales: [],
    history_reservations: []
  }
  return data
}