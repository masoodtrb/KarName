'use client';

import NextLink from 'next/link';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import AppCard from '../card';
import CardBody from '../card/cardBody';
import CardHeader from '../card/cardHeader';
import QuestionCardHeader from './questionCardHeader';

interface Props {
  dateTime: number;
  userImage: string;
  title: string;
  body: string;
  id: number;
  commentCount: number;
}

function QuestionCard({ dateTime, userImage, title, body, id, commentCount }: Props) {
  return (
    <AppCard>
      <CardHeader title={title} image={userImage}>
        <QuestionCardHeader dateTime={dateTime} commentCount={commentCount} />
      </CardHeader>
      <CardBody>
        <Box>
          <Text>{body}</Text>
        </Box>
        <Box display={'flex'} alignItems={'end'}>
          <Link as={NextLink} href={`/question-detail/${id}`}>
            <Button variant={'outline'} colorScheme='green'>
              مشاهده جزییات
            </Button>
          </Link>
        </Box>
      </CardBody>
    </AppCard>
  );
}

export default QuestionCard;
