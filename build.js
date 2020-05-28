  
'use strict'
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const data = {
  name: chalk.white('              Jeremy Gill'),
  handle: chalk.white('jeremygill87 ') + chalk.red('⬢'),
  work: chalk.white('Full Stack Web Developer'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('jeremy-gill-22116b96/'),
  github: chalk.gray('https://github.com/') + chalk.green('jeremygill87'),
  web: chalk.cyan('https://jeremygill87.github.io/newportfolio/'),
  npx: chalk.green('npx') + ' ' + chalk.white('@jeremygill87/businesscard'),
  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

const output = `${data.name} / ${data.handle}
${data.labelWork}  ${data.work}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelGitHub}  ${data.github}
${data.labelWeb}  ${data.web}
${data.labelCard}  ${data.npx}`;

fs.writeFileSync(path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
  }))
);