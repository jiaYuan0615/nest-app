import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Singer } from './singer.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 60 })
  name: string;

  /**
   * 詞
   */
  @Column({ length: 20 })
  lyricist: string;

  /**
   * 曲
   */
  @Column({ length: 20 })
  composer: string;

  @Column({ type: 'text' })
  lyric: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Singer, (singer) => singer.songs)
  singer: Singer;
}
