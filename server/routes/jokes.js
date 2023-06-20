import express from 'express';
import { connect, getUsersCollection } from "../db";
const router = express.Router();

router.get('/', async (req, res) => {
  // const apiRes = await fetch('https://official-joke-api.appspot.com/random_joke');
  // const data = await apiRes.json();
  // console.log(data);
  // res.json(data);

  try {
    const jokesCollection = getJokesCollection();
    const jokes = await jokesCollection.find().toArray();
    res.json(jokes);
  } catch (err) {
    console.error('Failed to fetch jokes:', err);
    res.status(500).json({ error: 'Failed to fetch jokes' });
  }
  
});
router.post('/', async (req, res) => {
  try {
    const jokesCollection = getJokesCollection();
    const { punchline, setup } = req.body;
    const joke = { punchline, setup };
    const result = await jokesCollection.insertOne(joke);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error('Failed to create user:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});



export default router;
