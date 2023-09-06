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

    return menus;
  }

  async findWithBusinessesExistence(): Promise<Menu[]> {
    const sql = `
      SELECT *
      FROM menus M
      WHERE fk_business_id NOT IN (SELECT business_id FROM businesses)
    `;

    const menusWithBusinessExistence = await this.entityManager.query(sql);

    return menusWithBusinessExistence;
  }

  async findAllBusinessAndMenuName() {
    const sql = `
        SELECT menu_name,
        (
            SELECT business_name 
            FROM businesses B 
            WHERE M.fk_business_id = B.business_id
        ) AS business_name
        FROM menus M
    `;

    const menus = await this.entityManager.query(sql);

    return menus;
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
