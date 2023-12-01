'use client';

import { PiChatTeardropTextBold } from 'react-icons/pi';
import { HStack, Text } from '@chakra-ui/react';
import DateTime from '../dateTime';

interface Props {
  dateTime: number;
  commentCount: number;
}

function QuestionCardHeader({ dateTime, commentCount }: Props) {
  return (
    <HStack spacing={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <DateTime dateTime={dateTime} />
      <HStack spacing={2} justifyContent={'center'} alignItems={'center'}>
        <Text color={'gray.400'} fontSize={'20px'}>
          <PiChatTeardropTextBold />
        </Text>
        <span>{commentCount}</span>
      </HStack>
    </HStack>
  );
}

export default QuestionCardHeader;
