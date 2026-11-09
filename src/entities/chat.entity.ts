import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Message } from './message.entity.js';

@Entity()
export class Chat {
  @PrimaryColumn('uuid', { default: () => 'uuidv7()' })
  id: string;

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
