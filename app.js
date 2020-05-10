const path = require('path')
const fs = require('fs')
console.log(path.join(__dirname, '/yjj/aaa.ssh'))
// fs.readFile(path.join(__dirname, '/yjj/aaa.ssh'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
    const SSH = 
    `module.exports = {
        // 模版列表，默认使用Vue，可以切换React
        VUE_TEMPLATE : 'direct:https://gitlab.qingclass.cc/wenbo.duan/vue-docker-template.git',
        REACT_TEMPLATE : 'direct:https://gitlab.qingclass.cc/wenbo.duan/react-docker-template.git'
      }
    `
//     fs.writeFile(path.join(__dirname, '/yjj/aaa.ssh'), SSH, 'utf-8', (err, data) => {
//         if (err) {
//             throw err
//         }
//         console.log('修改成功！')
//     })
//     // console.log(newData)
    
// })
fs.writeFile(path.join(__dirname, '/yjj/aa.shh'), SSH, 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log('写入成功！')
})