import { AnswerQuestionUseCase } from './answer-quetion';
import { AnswerRepository } from '../repository/answer-repository';
import { Answer } from '../entities/answer';

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);
  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New answer',
  });

  expect(answer.content).toEqual('New answer');
});
