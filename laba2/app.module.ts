import { Module } from '@nestjs/common';
import { transpsModule } from './transps/transps.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [transpsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
