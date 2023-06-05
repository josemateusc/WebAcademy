import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

function logger(tipo: Tipo) {
  const LOG_PATH = `${process.cwd()}/${process.env.LOG_PATH}`;
  return (req: Request, res: Response, next: NextFunction) => {
    let log;
    if (tipo === 'completo') {
      log = `${new Date().toISOString()} ${req.url} ${req.method} ${
        req.httpVersion
      } ${req.get('User-Agent')}\n`;
      next();
    } else {
      log = `${new Date().toISOString()} ${req.url} ${req.method}\n`;
      next();
    }
    fs.writeFile(LOG_PATH, log, { flag: 'a' }, (err) => {
      if (err) {
        console.log('Erro ao escrever o log!');
      }
    });
  };
}

export default logger;
