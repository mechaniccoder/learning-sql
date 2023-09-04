import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { GetSectionWithBusinessDto } from './dtos/get-section-with-businesses.dto';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get(':sectionId')
  async getSectionWithBusiness(
    @Param('sectionId', ParseIntPipe) sectionId: number,
    @Query() query: GetSectionWithBusinessDto,
  ) {
    const section = await this.sectionService.findWithBusinesses(
      sectionId,
      query,
    );
    return section;
  }

  @Get()
  async getAllSections() {
    const sections = await this.sectionService.findAll();

    return sections;
  }
}
