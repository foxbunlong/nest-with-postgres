import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

export class BaseUsersEntity {
  @PrimaryColumn()
  phone: string;

  @Column()
  name: string;

  @Column("text")
  accessToken: string;

  @Column({ default: "" })
  followerId: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
