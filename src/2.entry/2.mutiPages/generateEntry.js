const fs = require('fs')
const path = require('path')

const dirs = fs.readdirSync(path.resolve(__dirname, '../src/pages'))

const pages = dirs.filter(v => v!=='.DS_Store' && v!=='.')

const entrys = {}   // 入口名 : 路径

pages.map(v => {
    entrys[v] = path.resolve(__dirname, `../src/pages/${v}/js/app.js`)
})

module.exports = {
    entrys,
}



