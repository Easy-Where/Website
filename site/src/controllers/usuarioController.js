var usuarioModel = require("../models/usuarioModel");

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function validacaoEmpresa(req, res) {

    var empresa = req.body.empresaServer;
    var cnpj = req.body.cnpjServer;
    var dono = req.body.donoServer;

    if (empresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (dono == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.validacaoEmpresa(empresa, cnpj, dono)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEmpresa(req, res) {

    var empresa = req.body.empresaServer;
    var cnpj = req.body.cnpjServer;
    var dono = req.body.donoServer;

    if (empresa == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (dono == undefined) {
        res.status(400).send("Seu dono está undefined!");
    } else {
        
        usuarioModel.cadastrarEmpresa(empresa, cnpj, dono)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarGestor(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var sobrenome = req.body.sobrenomeServer;
    var empresaCad = req.body.empresaServer;
    var cnpj = req.body.cnpjServer;

    if (empresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (dono == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrarGestor(nome, email, senha, sobrenome, empresaCad)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    entrar,
    validacaoEmpresa,
    cadastrarEmpresa,
    cadastrarGestor
}