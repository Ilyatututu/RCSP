import { Module } from '@nestjs/common';
import { transp } from './entities/transp.entity';
import { transpsService } from './transps.service';
import { transpsController } from './transps.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [transpsController],
  providers: [transpsService],
  imports: [transp, DatasourceModule],
})
export class transpsModule {}
