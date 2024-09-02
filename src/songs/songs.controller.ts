import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-songs-dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songService: SongsService) { }
    @HttpCode(200)
    @Get()
    findAll() {
        try {
            return this.songService.findAllSongs();
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

    @HttpCode(201)
    @Post()
    createSong(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO)
    }

    @HttpCode(200)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.songService.findSongById(id);
    }

    @HttpCode(201)
    @Put(':id')
    updateSong(@Param('id') id: string, @Body() updateSongDTO: CreateSongDTO) {
        return this.songService.update(id, updateSongDTO);
    }

    @HttpCode(200)
    @Delete(':id')
    deleteSong(@Param('id') id: string) {
        return this.songService.delete(id);
    }
}
