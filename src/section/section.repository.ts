import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Section } from './section.entity';

@Injectable()
export class sectionRepository {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async findOneById(sectionId: number): Promise<Section> {
    const sqlQuery = `
        SELECT *
        FROM sections
        WHERE section_id = ${sectionId}
    `;

    const result = await this.manager.query(sqlQuery);

    return result;
  }
}
