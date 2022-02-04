const AnswerController = require("../controllers/answer.controller");

module.exports = app => {

            // ******Create******

app.post("/api/answers/new", AnswerController.createNewAnswer);


            // ******Retrieve******

app.get("/api/answers/", AnswerController.findAllAnswers);


            // ******Update******



            // ******Delete******


};