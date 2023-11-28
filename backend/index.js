import express from 'express';
import cors from 'cors';

import { termsData, mindmapData } from './data.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('dist'))

app.get('/terms', (req, res) => {
  res.json(termsData);
});

app.get('/mindmap', (req, res) => {
  res.json(mindmapData);
});

app.listen(3000, () => {
  console.log('Сервер запущен');
});
