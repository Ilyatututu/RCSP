import { feedbacksService } from './feedbacks.service';
import { feedback } from './entities/feedback.entity';
import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('feedback')
@Controller('feedbacks')
export class feedbacksController {
    constructor(private readonly feedbacksService: feedbacksService) {}

    @Get()
    findAll() {
        return this.feedbacksService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.feedbacksService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatefeedback: feedback) {
        return this.feedbacksService.update(+id, updatefeedback);
    }

    @Post()
    create(@Body() createfeedback: feedback) {
        return this.feedbacksService.create(createfeedback);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.feedbacksService.remove(+id);
    }
}
