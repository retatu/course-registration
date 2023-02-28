import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { VideoRepository } from './video.repository';
import { videoProviders } from './video.providers';

@Module({
  controllers: [VideoController],
  providers: [VideoService, VideoRepository, ...videoProviders]
})
export class VideoModule {}
