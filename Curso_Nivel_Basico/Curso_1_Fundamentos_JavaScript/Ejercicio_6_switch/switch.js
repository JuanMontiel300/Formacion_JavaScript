let expr = "Fresas"

switch (expr) {
    case "Naranjas":
        console.log("Las narajas cuestan 5.000 pesos el kilo")
        break;
    case "Manzanas":
        console.log("Las Manzanas cuestan 7.000 pesos el kilo")
        break;
    case "Platanos":
        console.log("Los platanos cuestan 6.000 pesos el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los Mangos y las Papayas cuestan 10.000 pesos el kilo")
        break;
    default:
        console.log(`Lo sentimos muchos no tenemos el producto que son: ${expr}`)

}

console.log("Hay algo mas que desees?")