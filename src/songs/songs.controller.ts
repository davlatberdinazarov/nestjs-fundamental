import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-songs-dto';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) { }
    @Get()
    findAll() {
        try {
            return this.songService.findAll();
        } catch (error) {
            throw new HttpException(
                'server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                },
            )
        }

    }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO)
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return `Find song by ID: ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `Update song by ID: ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Delete song by ID: ${id}`;
    }
}
