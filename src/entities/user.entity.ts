import { Column, Entity, OneToMany, type Relation } from "typeorm";

import { BaseEntity } from "./base.entity.js";
import { ChatParticipant } from "./chat-participant.entity.js";
import { Message } from "./message.entity.js";

@Entity()
export class User extends BaseEntity {
  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @OneToMany(() => ChatParticipant, (chatParticipant) => chatParticipant.user)
  chatParticipants: Relation<ChatParticipant[]>;
}
