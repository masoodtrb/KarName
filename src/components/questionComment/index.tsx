'use client';

import { useParams } from 'next/navigation';
import { Button, FormControl, FormLabel, Heading, Stack, Textarea } from '@chakra-ui/react';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import AnswerCard from '../answerCard';
import QuestionCard from '../questionCard';

function QuestionComment() {
  const params = useParams();
  const { data } = QuestionRequest.useQuestionLoad(parseInt(params['id'] as string));
  return (
    <Stack spacing={8}>
      {data && (
        <QuestionCard
          dateTime={data.createdAt}
          userImage={data.users.image}
          title={data.title}
          body={data.body}
          id={data.id}
          commentCount={data.comments?.length || 0}
        />
      )}
      <Heading as={'h2'} size={'md'}>
        پاسخ ها
      </Heading>
      <Stack spacing={8}>
        {data &&
          data.comments &&
          data.comments.map(cm => (
            <AnswerCard
              userId={cm.usersId}
              key={cm.id}
              dateTime={cm.createdAt}
              like={cm.like}
              dislike={cm.dislike}
              body={cm.body}
              id={cm.id}
            />
          ))}
      </Stack>
      <Stack>
        <Heading as={'h2'} size={'md'}>
          پاسخ خود را ثبت کنید
        </Heading>
        <form>
          <Stack>
            <FormControl isRequired>
              <FormLabel>پاسخ خود را بنویسید</FormLabel>
              <Textarea backgroundColor={'white'} name='body' placeContent={'متن پاسخ...'} />
            </FormControl>
            <Button colorScheme='green' width={'fit-content'}>
              ارسال پاسخ
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

export default QuestionComment;
