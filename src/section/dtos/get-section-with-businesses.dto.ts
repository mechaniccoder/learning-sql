import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { BusinessStatus } from 'src/business/business.entity';

export class GetSectionWithBusinessDto {
  @IsNumber()
  @IsOptional()
  floor?: number;

  @IsEnum(BusinessStatus)
  @IsOptional()
  status?: BusinessStatus;

  @IsString()
  @IsOptional()
  orderby?: string;
}
