import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import User from "./user.entity";

@Entity("tasks")
class Task {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({length: 50})
  title: string;

  @Column({ length: 300 })
  description: string;

  @Column({default: false})
  completed: boolean

  @CreateDateColumn({type:"date"})
  createdAt: string;

  @UpdateDateColumn({type:"date"})
  updatedAt: string;

  @ManyToOne(() => User, {onDelete: 'CASCADE'})
  user: User;

}

export default Task