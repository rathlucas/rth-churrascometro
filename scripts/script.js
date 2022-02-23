// Carne - 400g por pessoa  + 6 horas - 650g
// Cerveja - 1200ml por pessoa  + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa  + 6 horas - 1500ml

// Crianças valem por 0,5

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

function calculoDeGasto() {
    const refri = 1000;
    const cerveja = 1200;
    const carne = 400;

    const duracao = inputDuracao.value;
    const numeroAdultos = inputAdultos.value;
    const numeroCriancas = inputCriancas.value;

    if (duracao <= 6) {
        var calculoCriancas = {
            quantidade: numeroCriancas,
            carne: (numeroCriancas * carne) / 2,
            refri: (numeroCriancas * refri) / 2
        };

        var calculoAdultos = {
            quantidade: numeroAdultos,
            carne: carne * numeroAdultos,
            cerveja: cerveja * numeroAdultos,
            refri: refri * numeroAdultos
        };
    } else {
        var calculoAdultos = {
            quantidade: numeroAdultos,
            carne: 650 * numeroAdultos,
            cerveja: 2000 * numeroAdultos,
            refri: 1500 * numeroAdultos
        };
    }

    console.log(calculoAdultos);
    console.log(calculoCriancas);

    
}


