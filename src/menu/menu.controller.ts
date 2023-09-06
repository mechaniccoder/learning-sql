import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menus')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get('/businesses/:businessId')
  async getMenusOfBusiness(
    @Param('businessId', ParseIntPipe) businessId: number,
  ) {
    const menus = await this.menuService.findWithBusiness(businessId);

    return menus;
  }
}
