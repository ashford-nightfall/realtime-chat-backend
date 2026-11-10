import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity.js';
import { Chat } from './chat.entity.js';

@Entity()
export class Message {
  @PrimaryColumn('uuid', { default: () => 'uuidv7()' })
  id: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'boolean' })
  read: boolean;

  @ManyToOne(() => User, (user) => user.messages)
  user: Relation<User>;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: string;
}
