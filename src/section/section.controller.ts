import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get(':sectionId')
  getSection(@Param('sectionId', ParseIntPipe) sectionId: number) {
    const section = this.sectionService.findOne(sectionId);
    return section;
  }
}
