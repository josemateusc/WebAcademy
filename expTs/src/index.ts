import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
import router from './router/router';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;

const publicPath = process.cwd() + '/public';

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(
  sass({
    src: `${publicPath}/scss`,
    dest: `${publicPath}/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use(logger('completo'));
//app.use(morgan('combined'));
app.use(router);

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`),
]);

app.use(
  '/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts/`,
  ),
);

app.use((req, res, next) => {
  next();
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
