var express = require('express');
var router = express.Router();
var itemModel = require('../Models/ItemModel');
var responseClass = require('../responseClass');

// --------------------------------- GET ALL ITEMS ---------------------------------
router.get("/items", function(req, res, next) {
    itemModel.getAllItems(function (erro, retorno) {
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

// --------------------------------- ADD ITEM ---------------------------------
router.post("/item", function(req, res, next) {

    itemModel.addItem(req.body, function (erro, retorno) {
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


// --------------------------------- DELETE ITEM ---------------------------------
router.delete("/item/:id", function(req, res, next) {

    itemModel.delItem(req.params.id, function (erro, retorno) {
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

// --------------------------------- EDIT ITEM ---------------------------------
router.put("/item", function(req, res, next) {

    itemModel.editItem(req.body, function (erro, retorno) {
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

// --------------------------- DELETE ITEMS BY LIST ID ---------------------------
router.delete("/item/fromlist/:id", function(req, res, next) {

    itemModel.delItemFromList(req.params.id, function (erro, retorno) {
        let resposta = new responseClass();

        if (erro) {
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro);
        } else {
            if (retorno.affectedRows > 0) {
                resposta.msg = "Registros excluídos com sucesso";
            } else {
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir os registros'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})



module.exports = router;