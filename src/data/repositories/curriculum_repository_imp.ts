import CurriculumRepository from "../../domain/repositories/curriculum_repository";
import { AboutMe } from "../types/about_me";
import { Briefcase } from "../types/briefcase";
import { Language } from "../types/language";
import { Technology } from "../types/technology";
import jsonData from "../../assets/jsons/curriculum_info.json";

export default class CurriculumRepositoryImp implements CurriculumRepository {
    async getAboutMe(): Promise<AboutMe> {
        return jsonData.about_me;
    }

    async getBriefcase(): Promise<Briefcase[]> {
        return jsonData.briefcase;
    }

    async getTechnologies(): Promise<Technology[]> {
        return jsonData.technologies;
    }

    async getLanguages(): Promise<Language[]> {
        return jsonData.languages;
    }

}
