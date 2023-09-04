import { Injectable } from '@nestjs/common';
import { Section } from './section.entity';
import { sectionRepository } from './section.repository';

@Injectable()
export class SectionService {
  constructor(private readonly sectionRepository: sectionRepository) {}

  async findOneById(sectionId: number): Promise<Section> {
    const section = await this.sectionRepository.findOneById(sectionId);

    return section;
  }

  async findWithBusinesses(sectionId: number): Promise<Section> {
    const section = await this.sectionRepository.findWithBusinesses(sectionId);

    return section;
  }

  async findAll(): Promise<Section[]> {
    const sections = await this.sectionRepository.findAll();

    return sections;
  }
}
