const http = require("http")

const server = http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    const words = ["小吉です", "中吉です", "大吉です", "凶です", "末吉です", "吉", "小凶", "末凶", "大凶", "半凶", "半吉"];
    
    const word = words[Math.floor(Math.random()*words.length)];
    
    res.write(word)
    res.end()
})

server.listen(4000)
console.log("the server is listening...")