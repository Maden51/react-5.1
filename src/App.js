import './App.css';
import Card from './components/Card.js';
import { nanoid } from 'nanoid'

const dataTest = [
  {
    id: nanoid(),
    img: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    link: '#',
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    id: nanoid(),
    link: '#',
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.'
  }
]

function App() {
  
  return (
    <div className="container">
    {dataTest.map((card) => (
      <Card 
        {...card}
        key={card.id}
      >
        <p className="card-text">{card.text}</p>
      </Card>
    ))}
    </div>
  );
}

export default App;
