import { ApiModelProperty } from '@nestjs/swagger';
import { BeforeInsert, Column } from 'typeorm';
import uuid = require('uuid');
import { BaseEntity } from '../base.entity';

export class Example extends BaseEntity {
  @ApiModelProperty()
  @Column()
  title: string;

  @ApiModelProperty()
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiModelProperty()
  @Column()
  is_active: boolean;

  @BeforeInsert()
  protected beforeInsert(): void {
    this.id = uuid.v4();
  }
}
