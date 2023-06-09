import { useState, useEffect, useContext } from 'react';
import { AboutMe } from '../../../data/types/about_me';
import { CurriculumRepositoryContext } from '../../../injector';
import imageProfile from '../../../assets/images/image-jeremy.png';

import './about_me_style.scss';

function AboutMePage() {
  const curriculumRepository = useContext(CurriculumRepositoryContext);
  const [aboutMe, setAboutMe] = useState<AboutMe>();

  useEffect(() => {
    async function fetchAboutMe() {
      const aboutMe = await curriculumRepository.getAboutMe();
      setAboutMe(aboutMe);
    }

    fetchAboutMe();

  }, [aboutMe]);

  return (

    <div className="main-card__user">
      <img className="main-card__image" src={imageProfile} alt="user-img" />
      <div>
        <p className="main-card__name">{aboutMe?.name}</p>
      </div>
      <h3>Formación academica</h3>
      <p> {aboutMe?.academic_training} </p>
      <ul>
        {
          aboutMe?.description.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
      <ul>
        {
          aboutMe?.further_raining.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>


  )
}

export default AboutMePage;

