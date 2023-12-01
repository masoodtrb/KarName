'use client';

import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { UserRequest } from '@/libs/apiCall/entity/users';
import AppCard from '../card';
import CardBody from '../card/cardBody';
import CardHeader from '../card/cardHeader';
import AnswerCardHeader from './answerCardHeader';

interface Props {
  dateTime: number;
  body: string;
  id: number;
  userId: number;
  like: number;
  dislike: number;
}

function AnswerCard({ dateTime, body, userId, like, dislike }: Props) {
  const { data, isLoading } = UserRequest.useUserLoad(userId);
  return (
    <AppCard>
      {data && !isLoading && (
        <CardHeader title={data.name} image={data.image}>
          <AnswerCardHeader dateTime={dateTime} like={like} dislike={dislike} />
        </CardHeader>
      )}
      <CardBody>
        <Box>
          <Text>{body}</Text>
        </Box>
        <Box display={'flex'} alignItems={'end'}>
          <HStack spacing={6}>
            <Button variant={'outline'} colorScheme='green'>
              پاسخ خوب بود
            </Button>
            <Button variant={'outline'} colorScheme='red'>
              پاسخ خوب نبود
            </Button>
          </HStack>
        </Box>
      </CardBody>
    </AppCard>
  );
}

export default AnswerCard;
