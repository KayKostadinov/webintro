import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const apiRes = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await apiRes.json();
  console.log(data);
  res.json(data);
});


export default router;
