import { Column, Entity, JoinColumn, ManyToOne, type Relation, Unique } from "typeorm";

import { BaseEntity } from "./base.entity.js";
import { Chat } from "./chat.entity.js";
import { User } from "./user.entity.js";

@Entity()
@Unique(["user", "chat"])
export class ChatParticipant extends BaseEntity {
  @ManyToOne(() => User, (user) => user.chatParticipants, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: Relation<User>;

  @ManyToOne(() => Chat, (chat) => chat.chatParticipants, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "chat_id" })
  chat: Relation<Chat>;

  @Column({ name: "chat_id", type: "uuid" })
  chatId: string;
}
