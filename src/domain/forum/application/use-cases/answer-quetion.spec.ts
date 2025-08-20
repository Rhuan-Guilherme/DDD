import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-quetion'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it('Should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Content a new question',
    })

    expect(answer.id).toBeTruthy()
    expect(answer.content).toEqual('Content a new question')
    expect(inMemoryAnswerRepository.itens[0].id).toEqual(answer.id)
  })
})
