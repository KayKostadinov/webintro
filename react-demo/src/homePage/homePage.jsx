import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/button/button';

function Home() {
  const [heading, setHeading] = useState('Home page')
  const [joke, setJoke] = useState('')

  const handleClick = () => {
    setHeading('Dynamically changed heading with JavaScript and React!')
  }

  const getJoke = async () => {
    const apiRes = await fetch('http://localhost:3333/jokes');
    const data = await apiRes.json();
    setJoke(data.setup + ' ' + data.punchline);
  }

  return (
    <>
      <header>
        <h1>Web intro</h1>
      </header>
      <section>
        <h2 id="heading" className="section-header">{heading}</h2>
        <p>HTML is used to semantically structure content</p>
        <Button onClick={() => handleClick()}>Change title</Button>
        <br />
      </section>
      <section>
        <p>Tell me a joke</p>
        <p>{joke}</p>
        <Button onClick={() => getJoke()} styles={{ 'background-color': 'red' }}>Get new joke</Button>
      </section>
      <Link to='/page1'>next page</Link>
      <footer>
        <p>© 2023 Footer</p>
      </footer>
    </>
  )
}

export default Home
