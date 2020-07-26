const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set('view engine', "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/64475947?s=460&u=71adec0f07b6e33ee48046b95766acc284b5ced5&v=4",
        name: "Gabriel Monte",
        role: "Estudante Launchbase",
        description: 'Estudante de desenvolvimento web fullstack, participando do bootcamp "Launchbase" da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>.',
        links: [
            { name: "Github", url: "https://github.com/Gabrielzyr"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/gabriel-monte-zehyr-2388771ab/"}

        ]
    }
    return res.render("about", { about })
})

server.get('/portfolio', function(req, res) {
    return res.render("portfolio",{items: videos })
})

server.get('/video', function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id;
    })

    if (!video) {
        return res.send("video not found!")
    }

    return res.render("video", {item: video})
})

server.listen(5000, function() {
    console.log('server is running')
})