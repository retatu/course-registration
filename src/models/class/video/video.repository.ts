import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/repository/base-repository';
import { VideoDto } from './dto/video.dto';
import { Video } from './entities/video.entity';

@Injectable()
export class VideoRepository implements BaseRepository<VideoDto, Video>{
  constructor(
    @Inject('VIDEO_REPOSITORY')
    private videoRepository: typeof Video
  ) { }

  create(dto: VideoDto): Promise<Video> {
    return this.videoRepository.create({ ...dto });
  }
  findAll(): Promise<Video[]> {
    return this.videoRepository.findAll({include: ['topic']});
  }
  findOne(id: string): Promise<Video> {
    return this.videoRepository.findByPk(id);
  }
  async update(id: string, dto: VideoDto): Promise<Video> {
    const result = await this.videoRepository.update({ ...dto }, { where: { id }, returning: true });
    return result[1][0];
  }
  remove(id: string): void {
    this.videoRepository.destroy({ where: { id } });
  }

}
