import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Songs } from './schemas/song.schema';
import { Model } from 'mongoose';
import { CreateSongDTO } from './dto/create-songs-dto';

@Injectable()
export class SongsService {
    constructor(@InjectModel(Songs.name) private readonly songModel: Model<Songs>) {}

    async findAllSongs(): Promise<Songs[]> {
        return await this.songModel.find().exec();
    }

    async create(createSongDTO: CreateSongDTO): Promise<Songs> {
        const createSong = await new this.songModel(createSongDTO);
        return await createSong.save();
    }

    async findSongById(id: string): Promise<Songs> {
        return await this.songModel.findById(id).exec();
    }

    async update(id: string, updateSongDTO: CreateSongDTO): Promise<Songs> {
        const updatedSong = await this.songModel.findByIdAndUpdate(id, updateSongDTO, { new: true }).exec();
        if (!updatedSong) {
            throw new Error('Song not found');
        }
        return updatedSong;
    }

    async delete(id: string): Promise<Songs> {
        const song = await this.songModel.findByIdAndDelete(id).exec();
        if (!song) {
            throw new Error('Song not found');
        }
        return song;
    }
}
