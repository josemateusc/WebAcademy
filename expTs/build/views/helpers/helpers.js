"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTechs = exports.listProfs = void 0;
function listProfs(profs) {
    const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}
exports.listProfs = listProfs;
function listTechs(technologies) {
    const list = technologies.map((p) => {
        if (p.poweredByNodejs)
            return `<li>${p.nome} - ${p.type}</li>`;
    });
    return `<ul>${list.join('')}</ul>`;
}
exports.listTechs = listTechs;
