import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface InstructorPorps {
  name: string;
}

export class Instructor extends Entity<InstructorPorps> {
  static create(props: InstructorPorps, id: UniqueEntityID) {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
