export interface IProject {
  links: ILinks;
  imgAltText: string;
  imgSrc: string;
  title: string;
  tech_stack: string[];
  description: string;
}

export interface ILinks {
  Github?: string;
  Testing?: string;
  "Watch Video"?: string;
  "Live Demo"?: string;
}
