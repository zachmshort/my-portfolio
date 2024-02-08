import '../styles/Websites.css';
import Card from '../components/Card';
import Zachary from '../components/Zachary';

export default function Websites() {

    return (
      <>
      <Zachary/>
      <div className='cardsContainer'>
      <div className="cards">
      <Card title="My Resume" imageSRC = "/images/resume.png" projectLink="/resume2.pdf" projectDesc="Click here to view my resume.">
      </Card>
      </div>
      </div>
      </>
  );
}