import express from 'express';
import cors from 'cors';
import path from 'path';

import { antarasumut } from './lib/antarasumut.js';
import { armadanews } from './lib/armadanews.js';
import { bentengsiantar } from './lib/bentengsiantar.js';
import { bidiknewstoday } from './lib/bidiknewstoday.js';
import { dekrit } from './lib/dekrit.js';
import { detik } from './lib/detik.js';
import { harianmetro } from './lib/harianmetro.js';
import { hetanews } from './lib/hetanews.js';
import { idntimes } from './lib/idntimes.js';
import { jurnalx } from './lib/jurnalx.js';
import { kliktodaynews } from './lib/kliktodaynews.js';
import { lintangnews } from './lib/lintangnews.js';
import { lintaspublik } from './lib/lintaspublik.js';
import { mistar } from './lib/mistar.js';
import { newscorner } from './lib/newscorner.js';
import { rmolsumut } from './lib/rmolsumut.js';
import { sbnpro } from './lib/sbnpro.js';
import { sib } from './lib/sib.js';
import { tribunmedan } from './lib/tribunmedan.js';

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.resolve('.', 'index.html'));
});

app.get('/antarasumut', async (req, res) => {
    let data = await antarasumut();
    res.send(data);
});

app.get('/armadanews', async (req, res) => {
    let data = await armadanews();
    res.send(data);
});

app.get('/bentengsiantar', async (req, res) => {
    let data = await bentengsiantar();
    res.send(data);
});

app.get('/bidiknewstoday', async (req, res) => {
    let data = await bidiknewstoday();
    res.send(data);
});

app.get('/dekrit', async (req, res) => {
    let data = await dekrit();
    res.send(data);
});

app.get('/detik', async (req, res) => {
    let data = await detik();
    res.send(data);
});

app.get('/harianmetro', async (req, res) => {
    let data = await harianmetro();
    res.send(data);
});

app.get('/hetanews', async (req, res) => {
    let data = await hetanews();
    res.send(data);
});

app.get('/idntimes', async (req, res) => {
    let data = await idntimes();
    res.send(data);
});

app.get('/jurnalx', async (req, res) => {
    let data = await jurnalx();
    res.send(data);
});

app.get('/kliktodaynews', async (req, res) => {
    let data = await kliktodaynews();
    res.send(data);
});

app.get('/lintangnews', async (req, res) => {
    let data = await lintangnews();
    res.send(data);
});

app.get('/lintaspublik', async (req, res) => {
    let data = await lintaspublik();
    res.send(data);
});

app.get('/mistar', async (req, res) => {
    let data = await mistar();
    res.send(data);
});

app.get('/newscorner', async (req, res) => {
    let data = await newscorner();
    res.send(data);
});

app.get('/rmolsumut', async (req, res) => {
    let data = await rmolsumut();
    res.send(data);
});

app.get('/sbnpro', async (req, res) => {
    let data = await sbnpro();
    res.send(data);
});

app.get('/sib', async (req, res) => {
    let data = await sib();
    res.send(data);
});

app.get('/tribunmedan', async (req, res) => {
    let data = await tribunmedan();
    res.send(data);
});

app.listen(port, () => {
    console.info(`🚀 Server runs at port ${port}`);
});