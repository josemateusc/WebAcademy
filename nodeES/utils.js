export function toUpper(str){
    return str.toUpperCase();
}

export function createLink(filename) {
    return `<a href="${filename}">${filename}</a><br>\n`;
}

export function voltarLink() {
    return `<a href='/'>Voltar</a><br>\n`;
}
