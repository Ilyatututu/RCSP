import { Module } from '@nestjs/common';
import { transpsModule } from './transps/transps.module';
import { DatasourceModule } from './datasource/datasource.module';
import { feedbacksModule } from './feedbacks/feedbacks.module';
import { catalogsModule } from './catalogs/catalogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [transpsModule, DatasourceModule, feedbacksModule, catalogsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'education',
      password: '12345678',
      host: 'localhost',
      synchronize: false,
      logging: 'all',
      entities: ['src/catalogs/entities/catalog.entity']
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
