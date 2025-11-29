import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    private cliente: Cliente
    private acomodacao: Acomodacao
    private dataEntrada: Date
    private dataSaida?: Date

    constructor(cliente: Cliente, acomodacao: Acomodacao, dataEntrada: Date, dataSaida?: Date) {
        this.cliente = cliente
        this.acomodacao = acomodacao
        this.dataEntrada = dataEntrada
        this.dataSaida = dataSaida
    }

    public get Cliente() {
        return this.cliente
    }

    public get Acomodacao() {
        return this.acomodacao
    }

    public get DataEntrada() {
        return this.dataEntrada
    }

    public get DataSaida() {
        return this.dataSaida
    }

    public set DataSaida(data: Date | undefined) {
        this.dataSaida = data
    }
}