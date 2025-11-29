import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Armazem from "../dominio/armazem";

export default class FinalizarHospedagem extends Processo {

    constructor() {
        super()
        this.entrada = new Entrada()
    }

    processar(): void {
        let hospedagens = Armazem.InstanciaUnica.Hospedagens

        console.log(`\nFinalizar hospedagem:`)

        if (hospedagens.length === 0) {
            console.log(`Nenhuma hospedagem encontrada.`)
            return
        }

        hospedagens.forEach((hospedado, index) => {
            let status = hospedado.DataSaida ? "(Finalizada)" : "(Ativa)"
            console.log(`${index + 1} - ${hospedado.Cliente.Nome} - ${hospedado.Acomodacao.NomeAcomadacao} ${status}`)
        })

        let indice = this.entrada.receberNumero(`Escolha a hospedagem a finalizar: `) - 1

        let hospedagem = hospedagens[indice]

        if (!hospedagem) {
            console.log(`Hospedagem inválida.`)
            return
        }

        if (hospedagem.DataSaida) {
            console.log(`Essa hospedagem já está finalizada.`)
            return
        }

        hospedagem.DataSaida = new Date()

        console.log(`\nHospedagem finalizada com sucesso!`)
        console.log(`Cliente: ${hospedagem.Cliente.Nome}`)
        console.log(`Saída registrada em: ${hospedagem.DataSaida.toLocaleString()}`)
    }
}
