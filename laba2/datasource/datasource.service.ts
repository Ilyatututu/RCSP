import { Injectable } from '@nestjs/common';
import { transp } from 'src/transps/entities/transp.entity';

@Injectable()
export class DatasourceService {
    private transps: transp[] = [];

    gettransps(): transp[] {
        return this.transps;
    }
}