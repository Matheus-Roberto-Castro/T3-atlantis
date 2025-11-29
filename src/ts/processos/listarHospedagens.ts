import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ListarHospedagens extends Processo {

    processar(): void {
        let hospedagens = Armazem.InstanciaUnica.Hospedagens

        console.log(`\nLista de hospedagens:\n`)

        if (hospedagens.length === 0) {
            console.log(`Nenhuma hospedagem registrada.`)
            return
        }

        hospedagens.forEach((hospedagem, index) => {
            console.log(`----------------------------------------`)
            console.log(`Hospedagem ${index + 1}:`)
            console.log(`Cliente: ${hospedagem.Cliente.Nome}`)
            console.log(`Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}`)
            console.log(`Entrada: ${hospedagem.DataEntrada.toLocaleString()}`)

            if (hospedagem.DataSaida)
                console.log(`Saída: ${hospedagem.DataSaida.toLocaleString()}`)
            else
                console.log(`Saída: - (ainda hospedado)`)

        })

        console.log(`----------------------------------------`)
    }
}
