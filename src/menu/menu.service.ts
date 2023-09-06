import { Injectable } from '@nestjs/common';
import { Menu } from './menu.entity';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {
  constructor(private menuRepository: MenuRepository) {}

  async findWithBusiness(businessId: number): Promise<Menu[]> {
    const menus = await this.menuRepository.findWithBusiness(businessId);

    return menus;
  }
}
