const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {}
 
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm() {
        return readline.question('Digite um termo de pesquisa na Wikipedia: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The History of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start ()