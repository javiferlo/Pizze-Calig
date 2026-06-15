window.menuData = {
  topNote: {
    iva: "IVA incluido en los precios.",
    alergenos: "Información adicional de alérgenos preguntar al personal."
  },
  legend: [
    ["🌾", "Gluten"],
    ["🥛", "Lácteos"],
    ["🦐", "Crustáceos"],
    ["🐟", "Pescado"],
    ["🌱", "Soja"],
    ["🥚", "Huevo"],
    ["🦑", "Moluscos"],
    ["🟡", "Mostaza"]
  ],
  sections: [
    {
      title: "Entrantes",
      active: true,
      items: [
        { id: "plato109313", name: "Chipirones rebozados", price: "9,00€", allergens: ["🌾", "🦑"] },
        { id: "plato109310", name: "Croquetas de jamón y cocido (8u)", price: "9,00€", allergens: ["🌾", "🌱", "🥛", "🥚"], desc: "Puede contener trazas de Crustáceos, Pescado.", traces: ["🦐", "🐟"] },
        { id: "plato109312", name: "Huevos rotos con bacon", price: "8,00€", allergens: ["🥚"] },
        { id: "plato109314", name: "Calamares", price: "9,00€", allergens: ["🌾", "🦑"] },
        { id: "plato109319", name: "Sepia rebozada", price: "8,50€", image: "imagenes/Sepia, Gambas y Calamares.png", allergens: ["🌾", "🦑"] },
        { id: "plato109315", name: "Patatas de miel y mostaza", price: "7,50€", allergens: ["🥛", "🟡"], desc: "Patatas con salsa de miel, mostaza; salsa de cheddar y bacon." },
        { id: "plato109316", name: "Patatas bravas", price: "6,50€" },
        { id: "plato109320", name: "Tabla de jamón y queso", price: "12,00€", allergens: ["🥛"] },
        { id: "plato109321", name: "Ración de pan con tomate y alioli", price: "4,00€", allergens: ["🌾", "🥚"] },
        { id: "plato109322", name: "Tosta de escalivada y anchoas", price: "6,50€", allergens: ["🌾", "🐟"] },
        { id: "plato263548", name: "Sticks de mozzarella (8u)", price: "8,50€", allergens: ["🌾", "🥛"] },
        { id: "plato109323", name: "Mix de quesos rebozados (8u)", price: "9,00€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato109325", name: "Pollo Rooster", price: "8,00€", allergens: ["🌾", "🥚"] },
        { id: "plato311593", name: "Aros de cebolla a la cerveza", price: "8,50€", allergens: ["🌾"] },
        { id: "plato112045", name: "Ración de pan", price: "2,00€", allergens: ["🌾"] }
      ]
    },
    {
      title: "Ensaladas",
      items: [
        { id: "plato109326", name: "Atún", price: "10,00€", allergens: ["🐟"], desc: "Lechuga variada, tomate, cebolla, atún y aceitunas." },
        { id: "plato109328", name: "César", price: "10,00€", allergens: ["🌾", "🥛", "🐟", "🥚"], desc: "Lechuga variada, tomates cherry, picatostes, pollo, queso parmesano y salsa César." },
        { id: "plato109329", name: "Clásica", price: "8,50€", image: "imagenes/Ensalada variada con verduras y aceitunas.png", desc: "Lechuga variada, tomate, pimiento rojo y verde, aceitunas y cebolla." },
        { id: "plato109330", name: "De la casa", price: "10,50€", allergens: ["🌾"], desc: "Lechuga variada, tomates cherry, pasas, pipas, foie, picatostes, jamón serrano y vinagreta." },
        { id: "plato165215", name: "Templada", price: "10,50€", image: "imagenes/Ensalada templada.png", allergens: ["🌾", "🥛"], desc: "Lechuga variada, tomate, picatostes, crema de balsámico, daditos de bacon y queso rulo." }
      ]
    },
    {
      title: "Platos combinados",
      items: [
        { id: "plato109332", name: "(N1) Entrecot con guarnición", price: "17,50€", image: "imagenes/Carne a la brasa con patatas fritas.png" },
        { id: "plato109333", name: "(N2) Escalope de pollo, huevo y patatas fritas", price: "10,50€", allergens: ["🌾", "🥚"] },
        { id: "plato109334", name: "(N3) Muslo de pollo con patatas fritas", price: "10,00€" },
        { id: "plato109335", name: "(N4) Sepia, gambas, calamares y patatas fritas", price: "17,50€", image: "imagenes/Sepia, Gambas y Calamares.png", allergens: ["🦐", "🦑"] },
        { id: "plato109336", name: "(N5) Presa de cerdo con guarnición", price: "18,00€" },
        { id: "plato109337", name: "(N6) Solomillo de ternera con guarnición", price: "21,00€" },
        { id: "plato109338", name: "(N7) Costillar a la barbacoa con patatas fritas", price: "16,00€" },
        { id: "plato109339", name: "(N8) Medio conejo a la brasa con guarnición", price: "14,00€" },
        { id: "plato545700", name: "Pulpo a la brasa", price: "19,00€", image: "imagenes/Pulpo a la brasa.png", allergens: ["🦑"] },
        { id: "plato263555", name: "Bacalao frito con guarnición", price: "19,00€", allergens: ["🐟", "🌾"] },
        { id: "plato109341", name: "Burguer de Black Angus (220g)", price: "11,00€", allergens: ["🌾", "🥛"], desc: "Pan mollete, jardinera, bacon, queso cheddar y patatas fritas." },
        { id: "plato109342", name: "Burguer de pollo rebozado", price: "11,00€", allergens: ["🌾", "🥛", "🥚"], desc: "Pan mollete, jardinera, queso Edam, huevo y patatas fritas." },
        { id: "plato109344", name: "Sándwich vegetal", price: "6,50€", allergens: ["🌾", "🐟", "🥚"], desc: "Jardinera, atún, mayonesa y aceitunas." },
        { id: "plato109345", name: "Sándwich XL", price: "7,50€", allergens: ["🌾", "🥛", "🥚"], desc: "Jardinera, bacon, queso Edam, huevo y salsa César." },
        { id: "plato109346", name: "Planchado de cebolla caramelizada, jamón serrano y queso rulo", price: "7,00€", allergens: ["🌾", "🥛"] },
        { id: "plato109347", name: "Planchado de jamón y queso", price: "5,50€", allergens: ["🌾", "🥛"] },
        { id: "plato165216", name: "Pulled pork", price: "9,50€", allergens: ["🌾", "🥛"], desc: "Pan mollete, carne deshilachada a la bbq, salsa de queso cheddar, cebolla frita y patatas fritas." },
        { id: "plato112044", name: "Salsas extra", price: "2,00€", allergens: ["🥛"], desc: "Roquefort o pimienta." }
      ]
    },
    {
      title: "Pizzas",
      note: {
        text: "Todas nuestras pizzas se elaboran con base de tomate, mozzarella y especias.",
        allergens: ["🌾", "🥛"]
      },
      supplements: [
        { id: "plato407858", label: "Masa sin gluten", price: "+2,00€" },
        { id: "plato112046", label: "Suplemento ingrediente", price: "+1,20€" },
        { id: "plato112047", label: "Suplemento Foie / Anchoas", price: "+2,00€" }
      ],
      items: [
        { id: "plato311594", name: "Pan pizza", price: "4,50€", allergens: ["🌾", "🥛"] },
        { id: "plato545702", name: "Blanca", price: "11,00€", allergens: ["🌾", "🥛", "🥚"], desc: "Nata, mozarella, champiñones, bacon y huevo." },
        { id: "plato545701", name: "Guanciale", price: "12,00€", allergens: ["🌾", "🥛"], desc: "Nata, mozarella, cebolla caramelizada, guanciale y queso de cabra." },
        { id: "plato146754", name: "Huracán Danna", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Salami, chorizo, jamón york." },
        { id: "plato146755", name: "Pepperoni", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Pepperoni." },
        { id: "plato165217", name: "Cañonero", price: "10,50€", allergens: ["🌾", "🥛", "🥚"], desc: "Bacon, pimiento verde, huevo y patatas fritas." },
        { id: "plato109364", name: "Joan", price: "9,50€", allergens: ["🌾", "🥛"], desc: "Patatas fritas y hamburguesa." },
        { id: "plato109348", name: "Atún", price: "10,50€", allergens: ["🌾", "🥛", "🐟"], desc: "Atún, aceitunas negras y cebolla." },
        { id: "plato109349", name: "Barbacoa", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Bacon, carne boloñesa y salsa barbacoa." },
        { id: "plato109350", name: "Boloñesa", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Carne picada." },
        { id: "plato109351", name: "Blanco y negro", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Tocino ibérico, morcilla y salchicha." },
        { id: "plato109352", name: "Carbonara", price: "10,50€", image: "imagenes/Pizza Carbonara.png", allergens: ["🌾", "🥛"], desc: "Bacon, cebolla, champiñones y nata." },
        { id: "plato109353", name: "Diablo", price: "10,00€", allergens: ["🌾", "🥛"], desc: "Chorizo picante y guindilla." },
        { id: "plato109354", name: "Escalivada", price: "12,00€", allergens: ["🌾", "🥛"], desc: "Pimiento rojo, berenjena y queso de cabra." },
        { id: "plato109355", name: "Frankfurt", price: "9,00€", allergens: ["🌾", "🥛"], desc: "Frankfurt." },
        { id: "plato109356", name: "York", price: "8,50€", allergens: ["🌾", "🥛"], desc: "York." },
        { id: "plato109357", name: "Margarita", price: "8,00€", allergens: ["🌾", "🥛"] },
        { id: "plato109358", name: "Tropical", price: "9,50€", allergens: ["🌾", "🥛"], desc: "York y piña." },
        { id: "plato109359", name: "Vegetariana", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Cebolla, calabacín, champiñones, pimiento rojo y verde y alcachofa." },
        { id: "plato109360", name: "4 Estaciones", price: "11,00€", allergens: ["🌾", "🥛"], desc: "Salami, york, pimiento rojo y verde, champiñones y cebolla." },
        { id: "plato109361", name: "4 Quesos", price: "10,50€", allergens: ["🌾", "🥛"], desc: "Cheddar, cabra, roquefort y camembert." },
        { id: "plato109362", name: "Griega", price: "11,00€", allergens: ["🌾", "🥛"], desc: "York, maíz, aceitunas negras, queso feta y salsa de yogurt." },
        { id: "plato109363", name: "Serrano", price: "11,00€", image: "imagenes/Pizza Serrano.png", allergens: ["🌾", "🥛", "🥚"], desc: "Jamón serrano y huevo frito." },
        { id: "plato109365", name: "Kebab", price: "12,00€", image: "imagenes/Pizza Kebab.png", allergens: ["🌾", "🥛"], desc: "Kebab, patatas fritas y salsa blanca." },
        { id: "plato109366", name: "Delicia", price: "12,00€", allergens: ["🌾", "🥛"], desc: "Cebolla caramelizada, foie, jamón serrano y pasas." }
      ]
    },
    {
      title: "Pastas",
      items: [
        { id: "plato263556", name: "Linguini de rabo de toro", price: "9,50€", image: "imagenes/Plato de pasta.png", allergens: ["🌾", "🥛"], desc: "Salsa de champiñones y escamas de queso parmesano." },
        { id: "plato109368", name: "Tallarines Diablo", price: "9,50€", allergens: ["🌾"] },
        { id: "plato109369", name: "Tallarines carbonara o boloñesa", price: "8,50€", allergens: ["🌾", "🥛"] },
        { id: "plato109370", name: "Canelones de carne caseros (4u)", price: "8,00€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato109371", name: "Lasaña de carne casera", price: "8,50€", allergens: ["🌾", "🥛"] },
        { id: "plato109372", name: "Escalope boloñesa", price: "10,00€", allergens: ["🌾", "🥚"] }
      ]
    },
    {
      title: "Niños y niñas",
      items: [
        { id: "plato109375", name: "Sticks de pollo con patatas fritas", price: "8,50€", allergens: ["🌾", "🥚"] },
        { id: "plato109376", name: "Nuggets de pollo (8u)", price: "7,00€", image: "imagenes/Sepia rebozada.png", allergens: ["🌾", "🥚"] },
        { id: "plato109374", name: "Hamburguesa mixta con queso Edam y patatas", price: "6,50€", allergens: ["🌾", "🥛"] }
      ]
    },
    {
      title: "Postres",
      items: [
        { id: "plato109382", name: "Tarta de queso", price: "4,50€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato109377", name: "Tiramisú", price: "4,50€", image: "imagenes/Tiramisú Casero.png", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato629036", name: "Panacota", price: "4,50€", image: "imagenes/Postre de panacota con frutos rojos.png", allergens: ["🥛"] },
        { id: "plato109379", name: "Coulant de chocolate negro", price: "4,50€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato109378", name: "Coulant de chocolate blanco sin gluten", price: "4,50€", allergens: ["🥛", "🥚"] },
        { id: "plato629037", name: "Tarta de galleta y chocolate", price: "4,50€", image: "imagenes/Tarta de chocolate con salsa de chocolate.png", allergens: ["🌾", "🥛"] },
        { id: "plato109384", name: "Contesa", price: "4,50€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato109383", name: "Tarta de Whisky", price: "4,50€", allergens: ["🌾", "🥛", "🥚"] },
        { id: "plato629038", name: "Bolas de helado", price: "2,00€", allergens: ["🥛"], desc: "Limón, chocolate, fresa, pistacho, avellana, vainilla y café." },
        { id: "plato629039", name: "Helados variados", price: "", allergens: ["🥛"], desc: "Precio según el helado." }
      ]
    }
  ],
  footer: {
    name: "Pizzeria Vila de Càlig",
    address: "Calle Tortosa, nº1, Càlig"
  }
};