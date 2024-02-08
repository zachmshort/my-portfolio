import React, { useEffect } from 'react';
import '../styles/Card.css'; 

const Card = ({ title, projectLink, projectDesc, imageSRC }) => {
    useEffect(() => {
        const handleOnMouseMove = e => {
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left, 
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        }

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            card.addEventListener('mousemove', handleOnMouseMove);
            return () => {
                card.removeEventListener('mousemove', handleOnMouseMove);
            }
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleOnMouseMove);
            });
        }
    }, []);

    return (
      <a href = {projectLink} target="_blank">
        <div className="card" title={title}>
          <div className="cardBorder"></div>
          <div className='cardContent'>
            <img src={imageSRC} alt={title} />
            <h1> {title} </h1>
            <p> {projectDesc} </p>
          </div>
        </div>
        </a>
    );
};

export default Card;
