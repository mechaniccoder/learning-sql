import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { GetSectionWithBusinessDto } from './dtos/get-section-with-businesses.dto';
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

  async findWithBusinesses(
    sectionId: number,
    query: GetSectionWithBusinessDto,
  ): Promise<Section> {
    const { floor, status } = query;

    const sqlQuery = `
        SELECT *
        FROM sections S
        LEFT JOIN businesses B
        ON S.section_id = B.fk_section_id
        WHERE S.section_id = ${sectionId}
        ${floor ? `AND S.floor = ${floor}` : ''}
        ${status ? `AND B.status = '${status}'` : ''}
    `;
    console.log(sqlQuery);

    const sections = await this.manager.query(sqlQuery);

    return sections;
  }

  async findAll(): Promise<Section[]> {
    const sqlQuery = `
        SELECT *
        FROM sections 
    `;

    const sections = await this.manager.query(sqlQuery);

    return sections;
  }
}
