import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
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

  @Get('business-exist')
  async getMenusWithBusinessExist() {
    const menusWithBusinessExistence =
      await this.menuService.findWithBusinessExistence();

    return menusWithBusinessExistence;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':menuId/like')
  async likeMenu(@Param('menuId', ParseIntPipe) menuId: number) {
    await this.menuService.like(menuId);
  }

  @Delete(':menuId')
  async deleteMenu(@Param('menuId', ParseIntPipe) menuId: number) {
    await this.menuService.deleteOne(menuId);
  }
}
