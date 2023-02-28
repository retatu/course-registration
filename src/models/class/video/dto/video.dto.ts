import { BaseDto } from 'src/common/entities/base-dto';

export class VideoDto extends BaseDto {
  title: string;
  description: string;
  duration: number;
  topicId?: string;
}
