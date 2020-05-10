const inquirer = require('inquirer')
const ora = require('ora')
const createProject = require('./tools/create')
const quesion = [
    {
        type: 'list',
        name: 'command',
        message: '选择命令',
        choices: [
            '更新项目框架',
            '创建新项目'
        ],
        default: '更新框架'
    }
]

inquirer.prompt(quesion).then(answer => {
    console.log(answer)
    if (answer.command === '更新项目框架') {
        const spinner = ora('Loading unicorns').start()
        setTimeout(() => {
            spinner.color = 'yellow'
            spinner.text = 'Loading unicorns'
        }, 1000)
    }
    if (answer.command === '创建新项目') {

        createProject.create()
    }
})