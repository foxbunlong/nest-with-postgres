import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("app-config")
export class AppConfigEntity {
  @PrimaryColumn()
  readonly key: string;

  @Column({ default: "" })
  readonly title: string;

  @Column({ default: "" })
  readonly description: string;

  @Column({ type: "text", default: null })
  readonly value: string;
}
