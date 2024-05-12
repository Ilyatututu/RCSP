import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { feedback } from './entities/feedback.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class feedbacksService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(feedback: feedback) {
        this.datasourceService.getfeedbacks().push(feedback);
        return feedback;
    }

    findOne(id: number) {
        const feedbacks = this.datasourceService.getfeedbacks();

        if (feedbacks.length === 0) {
            throw new HttpException('', HttpStatus.NO_CONTENT);
        }

        return feedbacks;
    }

    findAll(): feedback[] {
        return this.datasourceService.getfeedbacks();
    }

    update(id: number, updatedfeedback: feedback) {
        const index = this.datasourceService
            .getfeedbacks()
            .findIndex((feedback) => feedback.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.getfeedbacks()[index] = updatedfeedback;
        return this.datasourceService.getfeedbacks()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .getfeedbacks()
        .findIndex((feedback) => feedback.id === id);

        if (index == -1) {
            throw new HttpException("No feedback found", HttpStatus.BAD_REQUEST);
        }

        this.datasourceService.getfeedbacks().splice(index, 1);
        return HttpStatus.OK;
    }
}
