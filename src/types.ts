export type Job = {
  skills: any;
  id: number;
  title: string;
  company: string;
  description: string;
  url: string;
  skillList: string;
  todo: string;
};

export type Skill = {
  idCode: string;
  name: string;
  url: string;
  description: string;
}

export type Todo = {
	todo: string;
	company: string;
	title: string;
	url: string;
}

export type TotaledSkill = {
	skill: Skill;
	total: number;
	isOpen: boolean;
	lookupInfoLink: string;
}
