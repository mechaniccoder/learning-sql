import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuRepository {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async findWithBusiness(businessId: number): Promise<Menu[]> {
    const sql = `
        SELECT * 
        FROM menus M
        LEFT JOIN businesses B
        ON M.fk_business_id = B.business_id
        WHERE B.business_id = ${businessId}
    `;

    const menus = await this.entityManager.query(sql);

    return menus ?? [];
  }
}
