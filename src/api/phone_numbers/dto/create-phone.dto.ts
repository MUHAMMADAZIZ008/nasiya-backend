import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PhoneNumberDto {
  @ApiProperty({
    description: 'The phone number of the debtor',
    example: '+998901234567',
  })
  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number must not be empty' })
  phone_number: string;

  @ApiProperty({
    description: 'The ID of the debtor',
    example: '123',
  })
  @IsString({ message: 'Debtor ID must be a string' })
  @IsNotEmpty({ message: 'Debtor ID must not be empty' })
  debtorId: string;
}
