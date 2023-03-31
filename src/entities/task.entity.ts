import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./user.entity";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({length: 50})
  tile: string;

  @Column({ length: 150 })
  description: string;

  @ManyToOne(() => User, {onDelete: 'CASCADE'})
  user: User;

}

export default Task