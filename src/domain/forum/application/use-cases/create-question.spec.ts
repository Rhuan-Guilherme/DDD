import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('Should be able to create an question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'New question',
      content: 'Content a new question',
    })

    expect(question.title).toEqual('New question')
    expect(question.slug.value).toEqual('new-question')
    expect(inMemoryQuestionsRepository.itens[0].id).toEqual(question.id)
  })
})
