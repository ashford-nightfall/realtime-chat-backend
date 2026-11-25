import { Entity, OneToMany, type Relation } from "typeorm";

import { BaseEntity } from "./base.entity.js";
import { ChatParticipant } from "./chat-participant.entity.js";
import { Message } from "./message.entity.js";

@Entity()
export class Chat extends BaseEntity {
  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  @OneToMany(() => ChatParticipant, (chatParticipant) => chatParticipant.chat)
  chatParticipants: Relation<ChatParticipant[]>;
}
