import { AboutMe } from "../../data/types/about_me";
import { Briefcase } from "../../data/types/briefcase";
import { Language } from "../../data/types/language";
import { Technology } from "../../data/types/technology";

export default interface CurriculumRepository {

    getAboutMe(): Promise<AboutMe>;

    getBriefcase(): Promise<Briefcase[]>;

    getTechnologies(): Promise<Technology[]>;

    getLanguages(): Promise<Language[]>;

}
