#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(`./package.json`, { encoding: 'utf-8' }));

const keysForDeletion = ['scripts', 'devDependencies', 'workspaces'];

keysForDeletion.forEach((key) => delete pkg[key]);

const distFolder = 'dist';

writeFileSync(`./${distFolder}/package.json`, JSON.stringify(pkg));
