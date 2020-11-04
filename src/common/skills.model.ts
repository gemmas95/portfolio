export interface ISkills {
  frontend: ISkill[];
  backend: ISkill[];
  hostingPlatforms: ISkill[];
  programmingLanguages: ISkill[];
  database: ISkill[];
  testing: ISkill[];
  versionControl: ISkill;
}

export interface ISkill {
  link: string;
  imgAltText: string;
  imgSrc: string;
  skillName: string;
}
