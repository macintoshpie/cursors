// just have this script to get lsp instead of writing directly in script tag
// copy paste over
const canvas = document.createElement('canvas')
canvas.width = '800'
canvas.height = '600'
const ctx = canvas.getContext('2d')
document.appendChild(canvas)

ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 800, 600)