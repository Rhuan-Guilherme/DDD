import { AnswerRepository } from '@/domain/forum/application/repository/answer-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements AnswerRepository {
  public itens: Answer[] = []

  async create(answer: Answer): Promise<void> {
    this.itens.push(answer)
  }
}
