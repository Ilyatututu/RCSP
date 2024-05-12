import { Module } from '@nestjs/common';
import { catalog } from './entities/catalog.entity';
import { catalogsService } from './catalogs.service';
import { catalogsController } from './catalogs.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affiliation } from 'src/affiliations/entities/affiliation.entity';
import { Article } from 'src/articles/entities/article.entity';

@Module({
  controllers: [catalogsController],
  providers: [catalogsService],
  imports: [catalog, DatasourceModule, TypeOrmModule.forFeature ([catalog, Affiliation, Article])],
})
export class catalogsModule {}