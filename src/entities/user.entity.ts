import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  type Relation,
  UpdateDateColumn,
} from 'typeorm';
import { Message } from './message.entity.js';
import { ChatParticipant } from './chat-participant.entity.js';

@Entity()
export class User {
  @PrimaryColumn('uuid', { default: () => 'uuidv7()' })
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @OneToMany(() => ChatParticipant, (chatParticipant) => chatParticipant.user)
  chatParticipants: Relation<ChatParticipant[]>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
