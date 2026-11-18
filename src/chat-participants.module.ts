import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatParticipant } from './entities/chat-participant.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ChatParticipant])],
})
export class ChatParticipantsModule {}
