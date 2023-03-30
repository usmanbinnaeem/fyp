import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Auth } from '../iam/authentication/decorators/auth.decorator';
import { AuthType } from '../iam/authentication/enum/auth-type.enum';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Auth(AuthType.None)
  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get()
  findAll(@Query('search') query: string) {
    if (query !== undefined) {
      return this.driversService.search(query);
    } else {
      return this.driversService.findAll(['vehicle', 'schools']);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driversService.findOne(+id, ['vehicle', 'schools']);
  }

  // @Get('search')
  // search(@Query('search') query: string) {
  //   return this.driversService.search(query);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    console.log('///', id, updateDriverDto);
    return this.driversService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driversService.remove(+id);
  }

  @Post(':driverId/schools/:schoolId')
  addSchoolToDriver(
    @Param('driverId') driverId: number,
    @Param('schoolId') schoolId: number,
  ) {
    return this.driversService.addSchoolToDriver(driverId, schoolId);
  }
}
