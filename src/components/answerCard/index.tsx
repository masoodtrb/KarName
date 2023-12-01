'use client';

import { useState } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import AppCard from '../card';
import CardBody from '../card/cardBody';
import CardHeader from '../card/cardHeader';
import AnswerCardHeader from './answerCardHeader';

interface Props extends Comments {}

function AnswerCard({ body, users, like, dislike, createdAt, ...rest }: Props) {
  const { mutateAsync } = QuestionRequest.useCommentAction();
  const [isLoading, setIsLoading] = useState(false);

  async function likeHandler() {
    setIsLoading(true);
    await mutateAsync({
      body,
      users,
      like: like + 1,
      dislike,
      createdAt,
      ...rest,
    });
    setIsLoading(false);
  }
  async function dislikeHandler() {
    setIsLoading(true);
    await mutateAsync({
      body,
      users,
      like,
      dislike: dislike + 1,
      createdAt,
      ...rest,
    });
    setIsLoading(false);
  }

  return (
    <AppCard>
      <CardHeader title={users.name} image={users.image}>
        <AnswerCardHeader dateTime={createdAt} like={like} dislike={dislike} />
      </CardHeader>

      <CardBody>
        <Box>
          <Text>{body}</Text>
        </Box>
        <Box display={'flex'} alignItems={'end'}>
          <HStack spacing={6}>
            <Button variant={'outline'} colorScheme='green' onClick={likeHandler} isLoading={isLoading}>
              پاسخ خوب بود
            </Button>
            <Button variant={'outline'} colorScheme='red' onClick={dislikeHandler} isLoading={isLoading}>
              پاسخ خوب نبود
            </Button>
          </HStack>
        </Box>
      </CardBody>
    </AppCard>
  );
}

export default AnswerCard;
