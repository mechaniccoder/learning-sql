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

  async like(menuId: number) {
    const sql = `
        UPDATE menus
        SET likes = likes + 1
        WHERE menu_id = ${menuId}
    `;

    await this.entityManager.query(sql);
  }

  async deleteOne(menuId: number) {
    const sql = `
        DELETE FROM menus
        WHERE menu_id = ${menuId}
    `;

    await this.entityManager.query(sql);
  }
}
