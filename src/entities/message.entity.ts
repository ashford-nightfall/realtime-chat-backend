import { Column, Entity, JoinColumn, ManyToOne, type Relation } from "typeorm";

import { BaseEntity } from "./base.entity.js";
import { Chat } from "./chat.entity.js";
import { User } from "./user.entity.js";

@Entity()
export class Message extends BaseEntity {
  @Column({ type: "text" })
  text: string;

  @Column({ type: "boolean" })
  read: boolean;

  @Column({ name: "read_by", type: "uuid" })
  readBy: string;

  @ManyToOne(() => User, (user) => user.messages, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "user_id" })
  user: Relation<User> | null;

  @ManyToOne(() => Chat, (chat) => chat.messages, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "chat_id" })
  chat: Relation<Chat>;
}
