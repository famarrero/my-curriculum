import CurriculumRepository from "./domain/repositories/curriculum_repository";
import CurriculumRepositoryImpl from "./data/repositories/curriculum_repository_imp";
import React from "react";

export const curriculumRepositoryImpl = new CurriculumRepositoryImpl();

export const CurriculumRepositoryContext = React.createContext<CurriculumRepository>(curriculumRepositoryImpl);