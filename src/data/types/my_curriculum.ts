import { AboutMe } from './about_me';
import { Briefcase } from './briefcase';
import { Language } from './language';
import { Technology } from './technology';

export type Curriculum = {
    about_me: AboutMe;
    briefcase: Briefcase[];
    technologies: Technology[];
    languages: Language[];
}