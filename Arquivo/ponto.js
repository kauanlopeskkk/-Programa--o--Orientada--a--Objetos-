class Parquimetro {
    constructor() {
        this.taxaPorHora = 4.00; // R$ 4,00 por hora
    }

    calcularTempo(valor) {
        if (valor < 1.00) {
            return "Valor insuficiente";
        }

        const horasCheias = Math.floor(valor / this.taxaPorHora);
        const minutosExtras = Math.round(((valor % this.taxaPorHora) / this.taxaPorHora) * 60);
        const tempoTotal = {
            horas: horasCheias,
            minutos: minutosExtras
        };
        const troco = valor - (horasCheias * this.taxaPorHora);

        return { tempo: tempoTotal, troco: troco.toFixed(2) };
    }
}

const parquimetro = new Parquimetro();

function calcularTempo() {
    const valorInput = document.getElementById("valor");
    const resultadoDiv = document.getElementById("resultado");
    const valor = parseFloat(valorInput.value);

    const resultado = parquimetro.calcularTempo(valor);

    if (typeof resultado === "string") {
        resultadoDiv.textContent = resultado;
    } else {
        const { tempo, troco } = resultado;
        let mensagem = `Tempo de permanência: ${tempo.horas} hora(s) e ${tempo.minutos} minuto(s).`;
        if (troco > 0) {
            mensagem += ` Troco: R$ ${troco}`;
        }
        resultadoDiv.textContent = mensagem;
    }
    valorInput.value = ""; // Limpa o campo de entrada
}