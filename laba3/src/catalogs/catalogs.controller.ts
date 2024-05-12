import { catalogsService } from './catalogs.service';
import { catalog } from './entities/catalog.entity';
import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('catalog')
@Controller('catalogs')
export class catalogsController {
    constructor(private readonly catalogsService: catalogsService) {}

    @Get('incomplete')
        findIncomplete() {
        this.catalogsService.findIncomplete();
    }

    @Get()
    findAll() {
        return this.catalogsService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.catalogsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatecatalog: catalog) {
        return this.catalogsService.update(+id, updatecatalog);
    }

    @Post()
    create(@Body() createcatalog: catalog) {
        return this.catalogsService.create(createcatalog);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        
        return this.catalogsService.remove(+id);
    }
}
