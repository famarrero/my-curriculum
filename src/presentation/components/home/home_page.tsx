import { FC, useState, useEffect, useContext } from 'react';
import { AboutMe } from '../../../data/types/about_me';
import { CurriculumRepositoryContext } from '../../../injector';



const HomePage: FC = () => {
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
    <div>
      <h2>About me</h2>
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

export default HomePage;

