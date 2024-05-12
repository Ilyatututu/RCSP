import { Injectable } from '@nestjs/common';
import { transp } from 'src/transps/entities/transp.entity';
import { feedback } from 'src/feedbacks/entities/feedback.entity';
import { catalog } from 'src/catalogs/entities/catalog.entity';

@Injectable()
export class DatasourceService {
    private transps: transp[] = [];

    gettransps(): transp[] {
        return this.transps;
    }

    private feedbacks: feedback[] = [];

    getfeedbacks(): feedback[] {
        return this.feedbacks;
    }

    private catalogs: catalog[] = [];

    getcatalogs(): catalog[] {
        return this.catalogs;
    }
}