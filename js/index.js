window.onload = function() {



    function ejercicio1() {

        let ensaladaDeFrutas = ["banana", "manzana", "pera", "naranja", "frutilla"];

        console.log("Las frutas que hay en la ensalada son: ");
        for (let i = 0; i < ensaladaDeFrutas.length; i++) {
            console.log(ensaladaDeFrutas[i]);
        }
    }

    //ejercicio1();

    function ejercicio2() {
        var edades = [14, 18, 24, 38, 32, 8];

        console.log("El promedio de edad es: ");

        var promedioEdades = 0;

        for (let i = 0; i < edades.length; i++) {
            promedioEdades += edades[i] / edades.length;


        }

        console.log(Math.round(promedioEdades));
    }

    //ejercicio2();

    function ejercicio3() {
        const amigo = ["Ryan", "Kieran", "Mark", "Miguel"];

        for (let i = 0; i < amigo.length; i++) {

            if (amigo[i].length <= 4) {
                console.log(amigo[i]);
            }


        }
    }

    //ejercicio3();

    function ejercicio4() {
        const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];

        listaDeSuper.push("Shampoo");

        listaDeSuper.shift();

        console.log("Largo del array: " + listaDeSuper.length);

        if (listaDeSuper.indexOf("Shampoo") >= 0) {
            console.log("Si existe el elemento Shampoo, en la poisición: " + listaDeSuper.indexOf("Shampoo"));
        }

        listaDeSuper.forEach(element => console.log(element));

    }

    //ejercicio4();

    function saludo() {
        alert("Bienvenido")
    }

    //saludo();

    function calculoMayor(num1, num2) {

        if (num1 > num2) {
            alert("El numero mayor es: " + num1)
        } else if (num1 < num2) {
            alert("El Numero mayor es: " + num2)
        } else {
            alert("Los numeros son iguales: " + num1 + " - " + num2)
        }
    }

    //calculoMayor(42, 42);

    function filtrarAmigos(arr) {

        let nuevoArray = [];

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].length <= 4) {
                nuevoArray.push(arr[i]);
            }
        }

        console.log(nuevoArray);
    }

    const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
    const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]

    // filtrarAmigos(amigo1)

    function tirarDado() {
        const dado = [1, 2, 3, 4, 5, 6];

        let random = dado[Math.floor(Math.random() * dado.length)]

        console.log(random);
    }

    //tirarDado();

    function ejercicio9() {

        const toDoList = {
            tipoTarea: "compras",
            dia: "14/03/2023",
            productos: ["jabon", "pasta", "azucar", "arroz", "tomates"],
            cantidadProducto: 5,
            notification: function() {
                alert("hola")
            }
        };

        //1. El día de la compra usando dot notation.
        console.log(toDoList.dia);
        //2. El tipo de tarea usando bracket notation
        console.log(toDoList["tipoTarea"]);
        //3. Extrae la cantidad de productos usando bracket notation.
        console.log(toDoList["cantidadProducto"]);
        //4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y recuerda que es una función).
        toDoList.notification();

    }

    //ejercicio9();

    function ejercicio10() {

        const superHeroes = {
            "squadName": "Super Hero Squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [{
                    "name": "Molecule Man",
                    "age": 29,
                    "secretIdentity": "Dan Jukes",
                    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
                },
                {
                    "name": "Madame Uppercut",
                    "age": 39,
                    "secretIdentity": "Jane Wilson",
                    "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
                }
            ]
        }

        //1. Consulta el valor ("Super Hero Squad") de la propiedad squadName
        console.log(superHeroes.squadName);
        //2. Consulta el valor que dice "Madame Uppercut" (ayuda:objeto-propiedad-arreglo-propiedad).
        console.log(superHeroes.members[1].name);
        //3. Consulta el valor que dice "Superhuman reflexes"
        console.log(superHeroes.members[1].powers[2]);
        //4. Consulta el valor "39" de la propiedad age de Madame Uppercut.
        console.log(superHeroes.members[1].age);
    }

    //ejercicio10();

    function avanzadoAmigos(arr) {
        const result = arr.filter(item => item.length <= 4);

        console.log(result);
    }

    //avanzadoAmigos(amigo2)
    //avanzadoAmigos(amigo1)


    const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

    function corregirFrase(frase) {

        const map1 = frase.map(item => "¡" + item + "!");

        console.log(map1);

    }

    console.log(frases);
    corregirFrase(frases);
}