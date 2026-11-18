import { Entity, OneToMany, type Relation } from 'typeorm';
import { Message } from './message.entity.js';
import { ChatParticipant } from './chat-participant.entity.js';
import { BaseEntity } from './base.entity.js';

@Entity()
export class Chat extends BaseEntity {
  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  @OneToMany(() => ChatParticipant, (chatParticipant) => chatParticipant.chat)
  chatParticipants: Relation<ChatParticipant[]>;
}
