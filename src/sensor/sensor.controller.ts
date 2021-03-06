import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SensorService } from './sensor.service'
import { Sensor} from './sensor.entity'
import { UserService } from 'src/user/user.service';


@Controller('Sensors')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {

  }
  

  @Get()
  findAll(): Promise<Sensor[]> {
    return this.sensorService.findAll()
  }

  @Get(':Id')
  get(@Param() params) {
    return this.sensorService.findOne(params.Id);
  }

  @Post()
  create(@Body() sensor: Sensor) {
    return this.sensorService.create(sensor);
  }

  @Post('/Batch')
  createBatch(@Body() sensors: Sensor[]) {

    
    sensors.forEach(d => {
      this.sensorService.create(d);
    });
    return sensors;
  }

  @Put()
  update(@Body() sensor: Sensor) {
    return this.sensorService.update(sensor);
  }

  @Delete(':Id')
  deleteUser(@Param() params) {
    return this.sensorService.delete(params.Id);
  }
}
