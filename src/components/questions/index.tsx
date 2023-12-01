'use client';

import { Stack } from '@chakra-ui/react';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import QuestionCard from '../questionCard';

function Questions() {
  const { data } = QuestionRequest.useQuestionList();

  console.log({ data });

  return (
    <Stack spacing={8}>
      {data &&
        data.map(question => (
          <QuestionCard
            commentCount={question.comments?.length || 0}
            key={question.id}
            dateTime={question.createdAt}
            userImage={question.users.image}
            title={question.title}
            body={question.body}
            id={question.id}
          />
        ))}
    </Stack>
  );
}

export default Questions;
