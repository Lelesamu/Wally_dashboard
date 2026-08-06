import { MinLength } from "class-validator";

export class LoginDto {
    username: string;

    @MinLength(8)
    password: string;   
}