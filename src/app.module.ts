import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessModule } from './business/business.module';
import { MenuModule } from './menu/menu.module';
import { RatingModule } from './rating/rating.module';
import { SectionModule } from './section/section.module';
import { TestModule } from './test/test.module';
import { SetModule } from './set/set.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tmdghks9409151!',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SectionModule,
    BusinessModule,
    MenuModule,
    MenuModule,
    RatingModule,
    TestModule,
    SetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
