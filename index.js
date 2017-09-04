const nomnoml = require('nomnoml')
const fs = require('fs')

draw()

function draw(state){

  document.body.innerHTML = ''
  var canvas = document.createElement('canvas')
  document.body.appendChild(canvas)

  var source = fs.readFileSync('./example.noml', 'utf8')
  nomnoml.draw(canvas, source)

}