import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { BusinessStatus } from 'src/business/business.entity';

export class GetSectionWithBusinessDto {
  @IsNumber()
  @IsOptional()
  floor?: number;

  @IsEnum(BusinessStatus)
  @IsOptional()
  status?: BusinessStatus;
}
