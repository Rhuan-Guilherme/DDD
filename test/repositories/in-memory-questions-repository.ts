import { QuestionRepository } from '@/domain/forum/application/repository/question-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements QuestionRepository {
  public itens: Question[] = []

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.itens.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async create(question: Question): Promise<void> {
    this.itens.push(question)
  }
}
