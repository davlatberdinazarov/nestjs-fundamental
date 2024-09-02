import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBlogDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    excerpt: string;

    @IsString()
    @IsNotEmpty()
    discription: string;
}