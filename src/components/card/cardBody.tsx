'use client';

import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

interface Props extends PropsWithChildren<unknown> {}

function CardBody({ children }: Props) {
  return (
    <Box display={'flex'} justifyContent={'space-between'} p={4} width={'100%'} minH={'inherit'}>
      {children}
    </Box>
  );
}

export default CardBody;
