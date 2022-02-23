const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

function calculoDeGasto() {
    
    const duracao = inputDuracao.value;
    
    let carne = 400;
    let cerveja = 1200;
    let refri = 1000;
    
    if (duracao > 6) {
        carne = 650;
        cerveja = 2000;
        refri = 1500;
    }

    const numeroAdultos = inputAdultos.value;
    const numeroCriancas = inputCriancas.value;
    
    const calculoTotal = {
        carne: (numeroAdultos * carne) + (numeroCriancas * (carne / 2)),
        refri: (numeroAdultos * refri) + (numeroCriancas * (refri / 2)),
        cerveja: numeroAdultos * cerveja
    };
    
    console.log(calculoTotal);

    return calculoTotal;
}

const resultadosDiv = document.getElementById("resultados");

function imprimirNaTela() {
    const calculoImpresso = calculoDeGasto();

    resultadosDiv.innerHTML = `
        <p>
            A quantidade necessária de carne será de ${calculoImpresso["carne"]}g.
        </p>
        <p>
            A quantidade necessária de cerveja será de ${calculoImpresso["cerveja"]}ml.
        </p>
        <p>
            A quantidade necessária de refrigerante/água será de ${calculoImpresso["refri"]}ml.
        </p>

        `
}
