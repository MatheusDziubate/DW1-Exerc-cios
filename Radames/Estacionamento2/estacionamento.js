function calcularTarifa() {
    let entrada = new Date(document.getElementById('entrada').value);
    let saida = new Date(document.getElementById('saida').value);

    let grande = document.getElementById('grande').checked;
    let fidelidade = document.getElementById('fidelidade').checked;

    // validação
    if (!document.getElementById('entrada').value || 
        !document.getElementById('saida').value || 
        saida <= entrada) {
        
        document.getElementById('resultado').textContent = "Preencha datas válidas!";
        return;
    }

    // calcular horas
    let diferencaMs = saida - entrada;
    let horas = Math.ceil(diferencaMs / (1000 * 60 * 60));

    let tarifa = 0;

    // mesma lógica original
    if (horas >= 24) {
        let dias = Math.floor(horas / 24);
        let horasExcedentes = horas % 24;

        tarifa = (dias * 60) + (horasExcedentes * 2.5);
    } else {
        tarifa = 5 + ((horas * 2.5) - 2.5);
    }

    if (grande) {
        tarifa *= 1.25;
    }

    if (fidelidade) {
        tarifa *= 0.95;
    }

    document.getElementById('resultado').textContent =
        `Tempo total: ${horas} hora(s) | Valor: R$ ${tarifa.toFixed(2)}`;
}