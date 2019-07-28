import glob from 'glob';
import path from 'path';
import { log } from 'util';

const cwd = `${__dirname}/..`;

const components = glob.sync(`{components/**/*.component.tsx,pages/**/[^_]*.tsx}`, {
  cwd,
  nodir: true,
})
  .map(function resolvepath(partialpath) {
    log(partialpath);
    const fullpath = path.resolve(`${cwd}/${partialpath}`);

    return { partialpath, fullpath };
  })
  .map(async ({ partialpath, fullpath }) => {
    const { default: component } = await import(fullpath);

    return {
      partialpath,
      fullpath,
      component,
    }
  });


export default components;
