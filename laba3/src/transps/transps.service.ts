import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { transp } from './entities/transp.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class transpsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(transp: transp) {
        this.datasourceService.gettransps().push(transp);
        return transp;
    }

    findOne(id: number) {
        const transps = this.datasourceService.gettransps();

    if (transps.length === 0) {
      throw new HttpException('', HttpStatus.NO_CONTENT);
    }

    return transps;
    }

    findAll(): transp[] {
        return this.datasourceService.gettransps();
    }

    update(id: number, updatedtransp: transp) {
        const index = this.datasourceService
            .gettransps()
            .findIndex((transp) => transp.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.gettransps()[index] = updatedtransp;
        return this.datasourceService.gettransps()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .gettransps()
        .findIndex((transp) => transp.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.gettransps().splice(index, 1);
        return HttpStatus.OK;
    }
}
