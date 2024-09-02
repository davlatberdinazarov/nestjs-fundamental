import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

// Mock xizmat
const mockSongService = {
  findAll() {
    return [{ id: 1, title: '365', artists: ['Zedd', 'Katy Perry'] }];
  },
  create(createSongDTO) {
    return { id: 2, ...createSongDTO };
  },
  findOne(id: number) {
    if (id !== 1) {
      throw new Error('Song not found');
    }
    return { id: 1, title: '365', artists: ['Zedd', 'Katy Perry'] };
  },
  update(id: number, createSongDTO) {
    if (id !== 1) {
      throw new Error('Song not found');
    }
    return { id, ...createSongDTO };
  },
  remove(id: number) {
    if (id !== 1) {
      throw new Error('Song not found');
    }
    return { message: `Song with ID ${id} has been removed` };
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    // Bu yerda haqiqiy `SongsService` emas, balki mock xizmatni taqdim etamiz.
    {
      provide: SongsService,
      useValue: mockSongService,
    },
  ],
})
export class SongsModule {}
