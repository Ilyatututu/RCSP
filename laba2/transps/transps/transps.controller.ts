import { transpsService } from './transps.service';
import { transp } from './entities/transp.entity';
import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";

@Controller('transps')
export class transpsController {
    constructor(private readonly transpsService: transpsService) {}

    @Get()
    findAll() {
        return this.transpsService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.transpsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatetransp: transp) {
        return this.transpsService.update(+id, updatetransp);
    }

    @Post()
    create(@Body() createtransp: transp) {
        return this.transpsService.create(createtransp);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.transpsService.remove(+id);
    }
}
