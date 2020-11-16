#! /usr/bin/env node

'use strict';

const appName = process.argv[2];
const { spawnSync } = require('child_process');
const url = 'https://github.com/EdgeKing810/next-template';

spawnSync('git', ['clone', url, `${process.cwd()}/${appName}`]);
spawnSync('npm', ['install', '--prefix', `${process.cwd()}/${appName}`]);

console.log('Your app has been successfully installed');
console.log(`$ cd ${appName}`);
console.log('$ npm run dev');
