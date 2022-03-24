import { Devicegroup } from 'src/devicegroup/devicegroup.entity';
import { Lab } from 'src/lab/lab.entity';
import { Sensor } from 'src/sensor/sensor.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
// import { Transform } from 'class-transformer';

@Entity('device')
export class Device{
  @PrimaryGeneratedColumn()
  Id: number;

  // @Transform(x => new Date('dd/mm/YYYY'))
  // @Column('text')
  // date: Date;
  @Column({ type: 'datetime' })
  DateSync: string;

  @Column('text') 
  Description: string;

  @Column('text')
  FriendlyName: string;

  @Column('text')
  Model: string;

  @Column('text')
  SerialNumber: string;

  // @Column('text')
  // Sensors: string;

  @Column('text')
  Type: string;

  // @Column()
  // LabId: number;

  @ManyToOne(type => Devicegroup, Devicegroup => Devicegroup.Id,  {eager: false})
  @JoinColumn({name: "Devicegroup_Id", referencedColumnName: "Id"})   
   // defining this is also optional because by default,
   // the referenced foreign key is named as <column_name>_id or account_id
  Devicegroup: Devicegroup;

  @OneToMany(type => Sensor, Sensor => Sensor.Device, {eager: true})
  Sensors: Sensor[];

  @Column('text')
  LabSerialNumber: string;

  @Column()
  IsActive: boolean;
}
