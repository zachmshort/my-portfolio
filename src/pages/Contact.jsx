import '../styles/Websites.css';
import Card from '../components/Card';
import Zachary from '../components/Zachary';

export default function Contact() {

    return (
      <>
      <Zachary/>
      <div className='cardsContainer'>
      <div className="cards">
      <Card title="Email Me" imageSRC = "/images/email.png" projectLink = "https://www.ezhomesteading.com/" projectDesc="For inquiries about web development, 3D modeling, & video editing.">
      </Card>
      <Card title="Github" projectLink = "https://github.com/zachmshort/" imageSRC = "/images/github.png" projectDesc="For history of all my previous & current coding-related projects.">
      </Card>
      <Card title="LinkedIn" imageSRC = "/images/linkedin.png" projectLink = "https://www.linkedin.com/in/zachary-short-12a1ab2a8/" projectDesc="For previous employment, education, & more info on me.">
      </Card>
      </div>
      </div>
      </>
  );
}