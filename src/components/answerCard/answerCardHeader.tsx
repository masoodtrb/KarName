'use client';

import { FaRegFrown, FaRegSmile } from 'react-icons/fa';
import { Box, HStack, Text } from '@chakra-ui/react';
import DateTime from '../dateTime';

interface Props {
  dateTime: number;
}

function AnswerCardHeader({ dateTime }: Props) {
  return (
    <HStack spacing={20} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <DateTime dateTime={dateTime} />
      <HStack spacing={6} justifyContent={'center'} alignItems={'center'}>
        <HStack spacing={3} display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <Text color={'green'} fontSize={'20px'}>
            <FaRegSmile />
          </Text>
          <span>22</span>
        </HStack>
        <HStack spacing={3} display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <Text color={'gray.400'} fontSize={'20px'}>
            <FaRegFrown />
          </Text>
          <span>2</span>
        </HStack>
      </HStack>
    </HStack>
  );
}

export default AnswerCardHeader;
