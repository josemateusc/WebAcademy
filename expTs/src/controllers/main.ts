import { Request, Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const bemvindo = (req: Request, res: Response) => {
  res.send(`Olá ${req.params.nome}`);
};

const publicPath = process.cwd() + '/public';

const page = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const index = (req: Request, res: Response) => {
  res.send('Hello world!');
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 4,
  },
  wordsPerSentence: {
    max: 50,
    min: 4,
  },
});

async function generateHtmlParagraphs(numParagraphs: number) {
  let html = '';
  for (let i = 0; i < numParagraphs; i++) {
    html += `<p>${lorem.generateParagraphs(numParagraphs)}</p>\n`;
  }
  return html;
}

const loremFunc = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/lorem.html`);
};

const generateLorem = async (req: Request, res: Response) => {
  const count = parseInt(req.params.count) || 5;
  const loremIpsum = await generateHtmlParagraphs(count);
  res.json({ loremIpsum });
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    uf: 'Universidade Federal do Amazonas',
  });
};

const hb2 = (req: Request, res: Response) => {
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

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
  });
};

const hb4 = function (req: Request, res: Response) {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb4', { profes });
};

const hb5 = function (req: Request, res: Response) {
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

export default {
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
