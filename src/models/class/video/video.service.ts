import { Injectable } from '@nestjs/common';
import { VideoDto } from './dto/video.dto';
import { VideoRepository } from './video.repository';

@Injectable()
export class VideoService {
  constructor(private videoRepository: VideoRepository) { }
  create(videoDto: VideoDto) {
    return this.videoRepository.create(videoDto);
  }

  findAll() {
    return this.videoRepository.findAll();
  }

  findOne(id: string) {
    return this.videoRepository.findOne(id);
  }

  update(id: string, videoDto: VideoDto) {
    return this.videoRepository.update(id, videoDto);;
  }

  remove(id: string) {
    return this.videoRepository.remove(id);
  }
}
