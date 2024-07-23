import {TechnicalTooling} from "./TechnicalTooling"
import {WorkExperienceModel} from "./WorkExperienceModel";
import {Education} from "./EducationModel";
import {SideProject} from "./SideProjects";
import {LanguageProficiency} from "./LanguageProficiency";
export interface CandidateModel {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  website: string;
  picture: string;
  technical_tooling: TechnicalTooling;
  work_experience?: WorkExperienceModel[];
  education_and_certifications?: Education[];
  side_projects?: SideProject[];
  languages?: LanguageProficiency[];
}
