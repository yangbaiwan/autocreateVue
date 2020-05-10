const inquirer = require('inquirer')
const ora = require('ora')
const { execSync } = require('child_process')
const download = require('download-git-repo')
const path = require('path')
const fs = require('fs')
const { SSH, nginx } = require('../nginx')


// console.log(path.join(__dirname, '../yjj'))
const quesion = [
    {
        type: 'input',
        name: 'project_name',
        message: '请输入项目的名字',
        default: 'my_new_project'
    },
    {
        type: 'list',
        name: 'frame',
        message: '请选择框架',
        choices: [ 'Vue', 'React' ],
        default: 'Vue'
    }
]
const quesionChange = [
    {
        type: 'list',
        name: 'changeNginx',
        message: '是否修改文件配置',
        choices: [ '是', '否' ]
    },
    {
        type: 'list',
        name: '_NPMS',
        message: '选择安装模块',
        choices: [ 'npm', 'cnpm', 'yarm' ]
    },
    {
        type: 'input',
        name: 'system',
        message: '修改服务器地址'
    }
]

module.exports = {
    create() {
       inquirer.prompt(quesion).then(ans => {
            execSync(`mkdir ${ans.project_name}`)
            
            const spinner = ora('start git clone').start()
            new Promise((resolve, reject) => {
                download('direct:https://github.com/yangbaiwan/vuemusic.git', `${ans.project_name}`, { clone: true }, (err) => {
                    if (err) {
                        spinner.fail('Code clone fail')
                        console.log(err)
                    } else {
                        spinner.succeed('Code clone success')
                        resolve('success')
                    }
                })
            }).then(res => {
                inquirer.prompt(quesionChange).then(res => {
                    if (res.changeNginx === '是') {
                    const SSH = SSH
                        fs.writeFile(path.join(__dirname, `../${ans.project_name}/aaa.sh`), SSH, 'utf-8', (err, data) => {
                            if (err) {
                                throw err
                            }
                            console.log('写入成功！')
                        })
                    }
                    if(res.changeNginx === '否') {
                        execSync(`cd ${ans.project_name}`)
                        execSync(`${res._NPMS} i`)
                        spinner.succeed(`cd  ${ans.project_name} && npm run serve`)
                    }
                })
            })
            // spinner.succeed('Code has been cloned!')
            
            
        }) 
    }
}

