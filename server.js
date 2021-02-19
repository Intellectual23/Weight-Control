var express = require('express')
var http = require('http')
var path = require('path')
var fs = require('fs')
var port = 3000
var host = "127.0.0.1"
var session = require('express-session')

var app = express()
app.set('port', port)

var server = app.listen(port, function () {
    var host = server.address().address
    console.log('Example app listening at http://%s:%s', host, port)
})

app.get('/', function (req, res) {
    sendFile("index.html", res)
})
app.get('/graph', function (req, res) {
    res.end("graph")
})
function sendFile(filePath, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', typeOfMessage(filePath) + "; charset=utf-8")
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err)
            res.statusCode = 404
            res.end(`Cannot read ${url}`)
        } else {
            console.log("send");
            res.end(data)
        }
    })
}
function typeOfMessage(message) {
    if (message.endsWith("html") || message.endsWith("ejs")) {
        return 'text/html'
    } else if (message.endsWith("css")){
        return 'text/css'
    } else if (message.endsWith("js")){
        return 'application/javascript'
    } else if (message.endsWith("jpg")){
        return 'image/jpeg'
    } else if (message.endsWith("favicon.ico")) {
        return "image/x-icon"
    }
}
