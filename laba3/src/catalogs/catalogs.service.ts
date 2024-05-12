import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { catalog } from './entities/catalog.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class catalogsService {
    findIncomplete() {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly datasourceService: DatasourceService) {}

    create(catalog: catalog) {
        this.datasourceService.getcatalogs().push(catalog);
        return catalog;
    }

    findOne(id: number) {
        const catalogs = this.datasourceService.getcatalogs();

        if (catalogs.length === 0) {
            throw new HttpException('', HttpStatus.NO_CONTENT);
        }

        return catalogs;
    }

    findAll(): catalog[] {
        return this.datasourceService.getcatalogs();
    }

    update(id: number, updatedcatalog: catalog) {
        const index = this.datasourceService
            .getcatalogs()
            .findIndex((catalog) => catalog.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.getcatalogs()[index] = updatedcatalog;
        return this.datasourceService.getcatalogs()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getcatalogs()
        .findIndex((catalog) => catalog.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.getcatalogs().splice(index, 1);
        return HttpStatus.OK;
    }
}
