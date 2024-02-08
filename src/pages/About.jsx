import '../styles/Websites.css';
import CardAbout from '../components/CardAbout';
import Zachary from '../components/Zachary';

export default function About() {

    return (
      <>
      <Zachary/>
      <div className='cardsContainer'>
      <div className="cards">
      <CardAbout title="Passions" projectDesc="For inquiries about web development, 3D modeling, & video editing.">
      </CardAbout>
      <CardAbout title="Goals"  projectDesc="For history of all my previous & current coding-related projects.">
      </CardAbout>
      <CardAbout title="LinkedIn" projectDesc="For previous employment, education, & more info on me.">
      </CardAbout>
      </div>
      </div>
      </>
  );
}