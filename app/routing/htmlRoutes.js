  // Basic route that sends the user first to the AJAX Page
const path = require ('path')

var html = function (app) {
  
    //setting the index/home page to go on the / 
    app.get("/", function (req, res) {
        res.sendFile(path.join (__dirname, "../puclic/home.html"));
    })
   
    //setting the survey url
    app.get("/survey", function (req, res) {
        res.sendFile( path.join(__dirname, "../public/survey.html"))
    })

    //setting the base destination to the home page
    app.get( function (req, res) {
        res.sendFile(path.join (__dirname, "../puclic/home.html"));
    })

    
}

module.exports = html;