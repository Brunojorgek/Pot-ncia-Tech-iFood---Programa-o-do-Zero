class formaBolo{
    constructor(saborDaMassa, saborRecheio) {
        this.saborRecheio = saborRecheio;
        this.saborDaMassa = saborDaMassa;
    }

    escrever() {
        console.log(`Um bolo delicioso de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
}

let boloFesta = new formaBolo("chocolate", "Nutella");

boloFesta.escrever();