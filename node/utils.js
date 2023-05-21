function toUpper(str){
    return str.toUpperCase();
}

function createLink(filename) {
    return `<a href="${filename}">${filename}</a><br>\n`;
}

function voltarLink() {
    return `<a href='/'>Voltar</a><br>\n`;
}

module.exports = {
    toUpper: toUpper,
    createLink: createLink,
    voltarLink: voltarLink
};