import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  type Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Chat } from './chat.entity.js';
import { User } from './user.entity.js';

@Entity()
@Unique(['user', 'chat'])
export class ChatParticipant {
  @PrimaryColumn('uuid', { default: () => 'uuidv7()' })
  id: string;

  @ManyToOne(() => User, (user) => user.chatParticipants)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @ManyToOne(() => Chat, (chat) => chat.chatParticipants)
  @JoinColumn({ name: 'chat_id' })
  chat: Relation<Chat>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
