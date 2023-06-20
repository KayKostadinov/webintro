import express from 'express';
import jokesRoutes from './routes/jokes.js';
import homeRoutes from './routes/home.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3333;
app.use((req, res, next) => {
  res.setHeader(
    'Content-Type', 'application/json'
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})
app.use(express.json());
app.use(express.static(join(__dirname, 'static')));

app.use('/jokes', jokesRoutes);
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
