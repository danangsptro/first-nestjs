/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';

@Entity('task')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'task_name' })
  taskName: string;

  @Column({ name: 'task_desc' })
  taskDesc: string;

  @Column({ name: 'status' })
  status: boolean;

  @Column({ name: 'created_date' })
  createdDate: Date;
}
