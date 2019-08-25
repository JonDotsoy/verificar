import importall from './importall';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import pretty from 'pretty';
import path from 'path';
import { writeFileSync, mkdirSync } from 'fs';
import { EOL } from 'os';
import { log } from 'util';
import ResetCSS from '../components/ResetCSS';

export async function run() {
  const all = await Promise.all(importall);

  await Promise.all(all
    .filter((i) => Boolean(i && i.component))
    .map(
      async (i) => {
        const sheet = new ServerStyleSheet();
        const Component = i.component;

        const body = renderToString(
          <StyleSheetManager sheet={sheet.instance}>
            <Component />
          </StyleSheetManager>
        );

        const styles = sheet.getStyleTags();

        const html = `
        <base href="https://verificar.jondotsoy.now.sh">

        <!-- Global dep -->
        ${renderToString(<ResetCSS />)}

        <!-- Styles -->
        ${styles}
        
        <!-- HTML -->
        ${body}
        `;

        const dir = new RegExp('.component.tsx').test(i.partialpath)
          ? path.resolve(`${__dirname}/../html/${path.dirname(i.partialpath)}/${path.basename(i.partialpath, '.component.tsx')}`)
          : path.resolve(`${__dirname}/../html/${path.dirname(i.partialpath)}/${path.basename(i.partialpath, '.tsx')}`);

        mkdirSync(dir, { recursive: true });

        writeFileSync(
          path.format({
            dir: dir,
            name: 'index',
            ext: '.html'
          }),
          pretty(
            [html].join(EOL.repeat(2))
          ),
        )
      }
    ));

  log('Compile complete')
}

run().catch(console.error);
