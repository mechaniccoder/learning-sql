import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get(':sectionId')
  async getSectionWithBusiness(
    @Param('sectionId', ParseIntPipe) sectionId: number,
  ) {
    const section = await this.sectionService.findWithBusinesses(sectionId);
    return section;
  }

  @Get()
  async getAllSections() {
    const sections = await this.sectionService.findAll();

    return sections;
  }
}
