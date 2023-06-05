import { Prof, Techs } from './helpersTypes';

export function listProfs(profs: Prof[]) {
  const list = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
  return `<ul>${list.join('')}</ul>`;
}

export function listTechs(technologies: Techs[]) {
  const list = technologies.map((p) => {
    if (p.poweredByNodejs) return `<li>${p.nome} - ${p.type}</li>`;
  });
  return `<ul>${list.join('')}</ul>`;
}
