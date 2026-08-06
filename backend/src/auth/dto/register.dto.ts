import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    username: string;

    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;
}

