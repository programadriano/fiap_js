class RedeSocial {
    constructor(nome, url, token) {
        this.nome = nome;
        this.url = url;
        this.token = token;
    }

    getNome() {
        return this.nome;
    }

    getURL() {
        return this.url;
    }

    getToken() {
        return this.token;
    }
}