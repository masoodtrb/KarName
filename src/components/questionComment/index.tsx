'use client';

import { FormEvent, useRef } from 'react';
import { useParams } from 'next/navigation';
import { Button, FormControl, FormLabel, Heading, Stack, Textarea } from '@chakra-ui/react';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import AnswerCard from '../answerCard';
import QuestionCard from '../questionCard';

function QuestionComment() {
  const params = useParams();
  const qId = parseInt(params['id'] as string);
  const { data } = QuestionRequest.useQuestionLoad(qId);
  const { data: comments } = QuestionRequest.useQuestionLoadComment(qId);
  const { mutateAsync } = QuestionRequest.useCreateQuestionComment();

  const commentBody = useRef<HTMLTextAreaElement>(null);

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (commentBody.current) {
      const data: Omit<Comments, 'id' | 'users'> = {
        questionId: qId,
        usersId: 6,
        body: commentBody.current.value,
        createdAt: Date.now(),
        like: 0,
        dislike: 0,
      };

      if (commentBody.current.value) {
        await mutateAsync(data);
        commentBody.current.setAttribute('value', '');
        commentBody.current.value = '';
      }
    }
  }

  return (
    <Stack spacing={8}>
      {data && (
        <QuestionCard
          dateTime={data.createdAt}
          userImage={data.users.image}
          title={data.title}
          body={data.body}
          id={data.id}
          commentCount={comments?.length || 0}
        />
      )}
      <Heading as={'h2'} size={'md'}>
        پاسخ ها
      </Heading>
      <Stack spacing={8}>{comments && comments.map(cm => <AnswerCard key={cm.id} {...cm} />)}</Stack>
      <Stack>
        <Heading as={'h2'} size={'md'}>
          پاسخ خود را ثبت کنید
        </Heading>
        <form onSubmit={submitHandler}>
          <Stack>
            <FormControl isRequired>
              <FormLabel>پاسخ خود را بنویسید</FormLabel>
              <Textarea
                backgroundColor={'white'}
                ref={commentBody}
                name='body'
                placeContent={'متن پاسخ...'}
              />
            </FormControl>
            <Button colorScheme='green' type='submit' width={'fit-content'}>
              ارسال پاسخ
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

export default QuestionComment;
