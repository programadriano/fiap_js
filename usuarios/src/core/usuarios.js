class Usuario {
    constructor(nome, email, senha, cpf, endereco) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.endereco = endereco;

        this.validateEntity();
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }

    getSenha() {
        return this.senha;
    }

    getCPF() {
        return this.cpf;
    }

    getEndereco() {
        return this.endereco;
    }

    validateEntity() {
        if (this.nome.trim() === '') {
            throw new Error('O nome não pode estar vazio!');
        }
        if (this.email.trim() === '') {
            throw new Error('O email não pode estar vazio!');
        }
    }
}