import { useState, useEffect, useContext } from 'react';
import { AboutMe } from '../../../data/types/about_me';
import { CurriculumRepositoryContext } from '../../../injector';

import './home_style.scss';
import { NavLink, Outlet } from 'react-router-dom';

function HomePage() {
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
    <>
      <div className="navbar">
        <NavLink
          to={`/`}
          className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/briefcase`}
          className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : ""
          }
        >
          Portafolio
        </NavLink>
        <NavLink
          to={`/technologies`}
          className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : ""
          }
        >
          Tecnologías
        </NavLink>
      </div>
      <div className='home-content'>
        <Outlet />
      </div>
    </>
  )
}

export default HomePage;

