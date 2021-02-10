const readline = require('readline-sync')

function start() {
 const content = {}

 content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()

 function askAndReturnSearchTerm(){
    return readline.question('Digite um termo de pesquisa na Wikipedia: ')
 }

 function askAndReturnPrefix(){
     const prefixes = ['Quem e','O que e','Sobre a Historia de']
     const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
     const selectedPrefixText = prefixes[selectedPrefixIndex]

     return selectedPrefixText

     console.log(selectedPrefixText)
 }

 console.log(content)
}

start ()