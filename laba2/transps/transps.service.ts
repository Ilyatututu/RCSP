import { Injectable, HttpStatus } from '@nestjs/common';
import { transp } from './entities/transp.entity';
import { create } from 'domain';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class transpsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(transp: transp) {
        this.datasourceService.gettransps().push(transp);
        return transp;
    }

    findOne(id: number) {
        return this.datasourceService
            .gettransps()
            .find((transp) => transp.id === id);
    }

    findAll(): transp[] {
        return this.datasourceService.gettransps();
    }

    update(id: number, updatedtransp: transp) {
        const index = this.datasourceService
            .gettransps()
            .findIndex((transp) => transp.id === id);
        this.datasourceService.gettransps()[index] = updatedtransp;
        return this.datasourceService.gettransps()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .gettransps()
        .findIndex((transp) => transp.id === id);
        this.datasourceService.gettransps().splice(index, 1);
        return HttpStatus.OK;
    }
}
