import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { catalog } from './entities/catalog.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { IncompleteCatalogDto } from './dto/incomplete-catalog.dto';
import { In, Repository } from 'typeorm';
import { Affiliation } from 'src/affiliations/entities/affiliation.entity';
import { Article } from 'src/articles/entities/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatalogDto } from './dto/catalogDTO';

@Injectable()
export class catalogsService {
    async findIncomplete(): Promise<IncompleteCatalogDto[]> {
        const catalogs = await this.catalogRepository.find();
        const incompletecatalogs: IncompleteCatalogDto[] = catalogs.map((catalog) => {
          const incompletecatalog = new IncompleteCatalogDto();
          incompletecatalog.id = catalog.id;
          incompletecatalog.price = catalog.price;
          return incompletecatalog;
        });
        return incompletecatalogs;
      }
    
    
    constructor(
        @InjectRepository(catalog)
        private readonly catalogRepository: Repository<catalog>,
        @InjectRepository(Affiliation)
        private readonly affiliationRepository: Repository<Affiliation>,
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
      ) {}
    

    async create(catalogDto: CreateCatalogDto): Promise<catalog>
    {
        const catalog = this.catalogRepository.create();
        catalog.category = catalogDto.category;
        catalog.price = catalogDto.price;
        const affiliations = await this.affiliationRepository.findBy({
            id: In (catalogDto.affiliations),
        });
        catalog.affiliations = affiliations;
        await this.catalogRepository.save(catalog);
        return catalog;
    }


    findOne(id: number): Promise<catalog> {
        return this.catalogRepository.findOne({
          where: { id },
          relations: { affiliations: true, articles: true },
        });
      }
    

    async findAll(): Promise<catalog[]> {
        const catalogs = await this.catalogRepository.find({
          relations: {
            affiliations: true,
            articles: true,
          },
        });
        return catalogs;
      }
    
    async update(id: number, updatedcatalog: catalog) {
        const catalog = await this.catalogRepository.findOne({ where: { id } });
        catalog.category = updatedcatalog.category;
        catalog.price = updatedcatalog.price;
        catalog.affiliations = updatedcatalog.affiliations;
        catalog.articles = updatedcatalog.articles;
        await this.catalogRepository.save(catalog);
        return catalog;
    }

    remove(id: number) {
        this.catalogRepository.delete({ id });
      }
    
}
