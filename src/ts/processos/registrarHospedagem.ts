import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Entrada from "../io/entrada";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class RegistrarHospedagem extends Processo {
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]

    constructor() {
        super()
        this.entrada = new Entrada()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    
    processar(): void {
        console.log(`\nInícando registro de hospedagem...`)

        console.log(`\nLista de clientes cadastrados:`)
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - Nome: ${cliente.Nome}`)
        });

        const indiceCliente = this.entrada.receberNumero(`\nDigite o número do cliente que irá se hospedar: `) - 1
        const cliente = this.clientes[indiceCliente]

        console.log(`\nLista de acomodações disponíveis:`)
        this.acomodacoes.forEach((acomodacao, index) => {
            console.log(`<${index + 1}> \nTipo: ${acomodacao.NomeAcomadacao} \nQuartos: ${acomodacao.Suite} \nCamas de Casal: ${acomodacao.CamaCasal} \nCamas de Solteiro: ${acomodacao.CamaSolteiro} \nClimatização: ${acomodacao.Climatizacao ? 'Sim' : 'Não'} \nGaragem: ${acomodacao.Garagem} \n====================`)
        });

        let indiceAcomodacao = this.entrada.receberNumero(`\nDigite o número da acomodação desejada: `)
        const acomodacao = this.acomodacoes[indiceAcomodacao - 1]

        let hospedagem = new Hospedagem(cliente, acomodacao, new Date())
        Armazem.InstanciaUnica.Hospedagens.push(hospedagem)

        console.log(`\nHospedagem registrada com sucesso!`)
        console.log(`Cliente: ${cliente.Nome}`)
        console.log(`Acomodação: ${acomodacao.NomeAcomadacao}`)
        console.log(`Entrada: ${hospedagem.DataEntrada.toLocaleDateString()}\n`)

    }
}