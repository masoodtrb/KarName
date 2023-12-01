'use client';

import { useMemo } from 'react';
import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react';
import { appMoment } from '@/libs/helpers/appMoment';

interface Props {
  dateTime: number;
}

function DateTime({ dateTime }: Props) {
  const { jDate, time } = useMemo(() => {
    const dateMoment = appMoment(dateTime);
    return {
      time: dateMoment.format('HH:mm'),
      jDate: dateMoment.format('jYYYY/jM/jD'),
    };
  }, [dateTime]);
  return (
    <HStack justifyContent={'center'} alignItems={'center'}>
      <Box>
        <Text as={'span'} ml={2}>
          ساعت:
        </Text>
        <Text as={'span'} color={'gray.400'}>
          {time}
        </Text>
      </Box>
      <Center height='24px'>
        <Divider orientation='vertical' />
      </Center>
      <Box>
        <Text as={'span'} ml={2}>
          تاریخ:
        </Text>
        <Text as={'span'} color={'gray.400'}>
          {jDate}
        </Text>
      </Box>
    </HStack>
  );
}

export default DateTime;
