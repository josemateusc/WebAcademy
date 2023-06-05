"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lorem_ipsum_1 = require("lorem-ipsum");
const bemvindo = (req, res) => {
    res.send(`Olá ${req.params.nome}`);
};
const publicPath = process.cwd() + '/public';
const page = (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
};
const index = (req, res) => {
    res.send('Hello world!');
};
const lorem = new lorem_ipsum_1.LoremIpsum({
    sentencesPerParagraph: {
        max: 10,
        min: 4,
    },
    wordsPerSentence: {
        max: 50,
        min: 4,
    },
});
function generateHtmlParagraphs(numParagraphs) {
    return __awaiter(this, void 0, void 0, function* () {
        let html = '';
        for (let i = 0; i < numParagraphs; i++) {
            html += `<p>${lorem.generateParagraphs(numParagraphs)}</p>\n`;
        }
        return html;
    });
}
const loremFunc = (req, res) => {
    res.sendFile(`${publicPath}/html/lorem.html`);
};
const generateLorem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const count = parseInt(req.params.count) || 5;
    const loremIpsum = yield generateHtmlParagraphs(count);
    res.json({ loremIpsum });
});
const hb1 = (req, res) => {
    res.render('main/hb1', {
        uf: 'Olá, você está aprendendo Express + HBS',
    });
};
const hb2 = (req, res) => {
    const profs = [
        { nome: 'Tayana Conte', sala: 112 },
        { nome: 'Horácio Fernandes', sala: 1132 },
        { nome: 'Edleno Moura', sala: 1123 },
        { nome: 'Elaine Harada', sala: 1212 },
    ];
    res.render('main/hb2', {
        profs,
    });
};
const hb3 = (req, res) => {
    res.render('main/hb3', {
        nome: 'Express',
        tipo: 'Framework',
        poweredByNode: true,
    });
};
const hb4 = function (req, res) {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];
    res.render('main/hb4', { profes });
};
const hb5 = function (req, res) {
    const technologies = [
        { nome: 'Express', type: 'Framework', poweredByNodejs: true },
        { nome: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { nome: 'React', type: 'Library', poweredByNodejs: true },
        { nome: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { nome: 'Django', type: 'Framework', poweredByNodejs: false },
        { nome: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { nome: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb5', { technologies });
};
exports.default = {
    bemvindo,
    page,
    index,
    lorem,
    loremFunc,
    generateLorem,
    hb1,
    hb2,
    hb3,
    hb4,
    hb5,
};
