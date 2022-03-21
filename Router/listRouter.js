var express = require('express');
var router = express.Router();
var listModel = require('../Models/ListModel');
var responseClass = require('../responseClass');

// --------------------------------- GET ALL LISTS ---------------------------------
router.get("/lists", function (req, res, next) {
    listModel.getAllLists(function (erro, retorno) {
        let resposta = new responseClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        } else {
            resposta.dados = retorno
        }

        res.json(resposta);
    })
});

// --------------------------------- ADD LIST ---------------------------------
router.post("/list", function (req, res, next) {

    listModel.addList(req.body, function (erro, retorno) {
        let resposta = new responseClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Registro adicionado com sucesso";
            } else {
                resposta.erro = true;
                resposta.msg = 'Não foi possível adicionar o registro'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})


// --------------------------------- DELETE LIST ---------------------------------
router.delete("/list/:id", function (req, res, next) {

    listModel.delList(req.params.id, function (erro, retorno) {
        let resposta = new responseClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Registro excluido com sucesso";
            } else {
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o registro'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

// --------------------------------- EDIT LIST ---------------------------------
router.put("/list", function (req, res, next) {

    listModel.editList(req.body, function (erro, retorno) {
        let resposta = new responseClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Registro atualizado com sucesso";
            } else {
                resposta.erro = true;
                resposta.msg = 'Não foi possível atualizar o registro'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

module.exports = router;