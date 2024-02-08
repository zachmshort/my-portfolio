import '../styles/Websites.css';
import Card from '../components/Card';

export default function Websites() {

    return (
      <div className='cardsContainer'>
      <div className="cards">
      <Card title="EZHomesteading" imageSRC = "/images/apple.png" projectLink = "https://www.ezhomesteading.com/" projectDesc="EZH aims to connect family scale farms & gardens with locals.">
      </Card>
      <Card title="EZHomesteading Clone" projectLink = "" imageSRC = "/images/tomatoe.png" projectDesc="A rudementary clone of EZH built without WordPress.">
      </Card>
      <Card title="Solemnace Galleries" imageSRC = "/images/axe.png" projectLink = "https://solemnace-galleries-2d28de62aee4.herokuapp.com/" projectDesc="Create a favorites list from hundreds of Warhammer figurines.">
      </Card>
      <Card title="Tech Blog" imageSRC = "/images/computer.png" projectLink = "https://brzama-tech-blog-8396d9089178.herokuapp.com/" projectDesc="This application allows users to post & interact with the posts of others.">
      </Card>
      <Card title="Dinner Date Planner" imageSRC = "/images/meal.png" projectLink = "https://zachmshort.github.io/DinnerDateGenerator/" projectDesc="This generator will give you a random meal & drink for a date night.">
      </Card>
      <Card title="My First Web App" imageSRC = "/images/1.png" projectLink = "https://zachmshort.github.io/My-First-Portfolio/" projectDesc="My first shot at building front-end web applications.">
      </Card>
      </div>
      </div>
  );
}