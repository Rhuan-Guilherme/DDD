import { QuestionRepository } from '@/domain/forum/application/repository/question-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionRepository {
  public itens: Question[] = []

  async create(question: Question): Promise<void> {
    this.itens.push(question)
  }
}
