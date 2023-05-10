import React from "react";
import "./portfolio.css";
import IMG1 from "../../assest/Bankist-2-picture.PNG";
import IMG2 from "../../assest/Bankist-1-picture.PNG";
import IMG3 from "../../assest/forkify-picture.PNG";
import IMG4 from "../../assest/expense-tracker-image.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bankist website",
    github: "https://github.com/AfrokingJasper/bankist-website-responsive",
    site: "https://bankist-website-eta.vercel.app/",
    description:
      "Smooth and Responsive Website. Fits perfrectly in all kinds of Device and accessible on all browsers. Everything you need in a modern bank and more.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Bankist Web Application",
    github: "https://github.com/AfrokingJasper/Bankist-web-app",
    site: "https://bankist-web-app.vercel.app/",
    description:
      "Modern banking application. Allows users to perform transaction between different currencies and formats the amount accordingly.",
  },
  {
    id: 3,
    image: IMG3,
    title: "RecipeHive Api Web App",
    github: "https://github.com/AfrokingJasper/forkify-web-app",
    site: "https://fortune-forkify-recipe.netlify.app/",
    description:
      "Modern Food recipe website. Allows users to search for diffenrent food, fetches the data from an API and renders the list of similar searches along with recipe used.",
  },
  {
    id: 3,
    image: IMG4,
    title: "Expense Tracker",
    github: "https://github.com/AfrokingJasper/React-Expense-tracker",
    site: "https://fortunes-expensetracker.netlify.app/",
    description:
      "Personal Expense Tracker. Keeps a record of all your personal expenses on monthly basis. Expenses can be filtered by the year it was incured and all expenses are displayed on a chart",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, site, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="imgs" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="description">{description}</div>
              <div className="porfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  GitHub
                </a>
                <a href={site} target="_blank" className="btn btn-primary">
                  View Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
