import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from './menu.controller';
import { Menu } from './menu.entity';
import { MenuRepository } from './menu.repository';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  controllers: [MenuController],
  providers: [MenuService, MenuRepository],
})
export class MenuModule {}
