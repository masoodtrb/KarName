'use client';

import { Box, Button, HStack, Text } from '@chakra-ui/react';
import AppCard from '../card';
import CardBody from '../card/cardBody';
import CardHeader from '../card/cardHeader';
import AnswerCardHeader from './answerCardHeader';

interface Props {
  title: string;
  userImage: string;
  dateTime: number;
  body: string;
}

function AnswerCard({ title, userImage, dateTime, body }: Props) {
  return (
    <AppCard>
      <CardHeader title={title} image={userImage}>
        <AnswerCardHeader dateTime={dateTime} />
      </CardHeader>
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
