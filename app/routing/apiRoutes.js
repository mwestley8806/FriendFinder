var surveyData = require("../data/surveyData");

module.exports = function (app) {

    app.get("/api/survey", function (req, res) {
        res.json(surveyData);
    });

    };

    app.post("/api/tables", function (req, res) {

        if (surveyData.length < 10) {
            surveyData.push(req.body);
            res.json(true);
        // } else {
        //     waitListData.push(req.body);
        //     res.json(false);
        }
    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        surveyData = [];
        waitListData = [];

        console.log(surveyData);
    });
};
