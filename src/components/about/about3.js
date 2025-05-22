import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const getPublicLink = (link) => link.replace(/^https?:\/\/update\.africtivistes\.org/, '/fr');

const About3 = ({ content, valeurs, histoire, picture, language }) => {
  const image = getImage(picture);

  // Vérifier la langue et définir les liens en conséquence

  return (
    <section id="company-about" className="pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="company-about-cont pt-45" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="col-lg-6 pt-50">
            <div className="company-about-image">
              <GatsbyImage image={image} alt={picture.altText} />
              <div className="years-experience mt-45">
                <ul>
                  {valeurs.map((value, index) => (
                    <li key={index}><a href={getPublicLink(value.link)}><h3>Nos valeurs</h3></a></li>
                  ))}
                  {histoire.map((story, index) => (
                    <li key={index}><a href={getPublicLink(story.link)}><h3>Notre Histoire</h3></a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About3;