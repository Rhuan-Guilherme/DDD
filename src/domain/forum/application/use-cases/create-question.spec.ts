import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repository/question-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: async (question: Question) => {},
}

test('Create an answer', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)
  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New question',
    content: 'Content a new question',
  })

  expect(question.title).toEqual('New question')
  expect(question.slug.value).toEqual('new-question')
})
