import { ISkill } from "./skill";

export interface Command {
    command: string;
    type: string;
    value: number;
    skill?: ISkill;
}