import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artists: string[];

  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: string; // Corrected type to string

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: string; // Corrected type to string
}
