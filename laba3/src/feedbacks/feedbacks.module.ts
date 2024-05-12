import { Module } from '@nestjs/common';
import { feedback } from './entities/feedback.entity';
import { feedbacksService } from './feedbacks.service';
import { feedbacksController } from './feedbacks.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [feedbacksController],
  providers: [feedbacksService],
  imports: [feedback, DatasourceModule],
})
export class feedbacksModule {}
