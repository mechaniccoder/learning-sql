import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get(':sectionId')
  async getSection(@Param('sectionId', ParseIntPipe) sectionId: number) {
    const section = await this.sectionService.findOneById(sectionId);
    return section;
  }

  @Get()
  async getAllSections() {
    const sections = await this.sectionService.findAll();

    return sections;
  }
}
