const server = require("./api/server.js")
const env = require("dotenv") 
const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n========== Server is listening on port ${port} ==========\n`)
})