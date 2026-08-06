import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    username!: string;

    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @IsString()
    password!: string;
}

