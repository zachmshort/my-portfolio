import '../styles/Websites.css';
import CardAbout from '../components/CardAbout';
import Zachary from '../components/Zachary';

export default function About() {

    return (
      <>
      <Zachary/>
      <div className='cardsContainer'>
      <div className="cards">
      <CardAbout title="Career Interests" projectDesc="I have always had an interest in technology & math. Over time, those passions have guided me into my career and I am so grateful to be doing something I enjoy. ">
      </CardAbout>
      <CardAbout title="Goals"  projectDesc="My goal is to maintain a balance between my career interests & my personal passions. Life is short, and you'll waste it playing too much & working too much.">
      </CardAbout>
      <CardAbout title="Personal Passions" projectDesc="Outside of my career obligations, weight lifting & jiu jitsu take up a prepodernace of my time. When I was younger I played soccer & tennis, and I have always gravitated towards the competition of individual sports. ">
      </CardAbout>
      </div>
      </div>
      </>
  );
}