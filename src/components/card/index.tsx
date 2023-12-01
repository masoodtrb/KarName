'use client';

import { Children, PropsWithChildren, ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import CardBody from './cardBody';
import CardHeader from './cardHeader';

interface Props extends PropsWithChildren {}
function AppCard({ children }: Props) {
  const childArray = Children.toArray(children);

  const header = childArray.find(child => {
    return (child as ReactElement).type === CardHeader;
  });
  const body = childArray.find(child => (child as ReactElement).type === CardBody);
  return (
    <Box boxShadow={'md'} borderRadius='8px'>
      <Box boxShadow={'xs'} backgroundColor={'#F9F9F9'} borderRadius='8px' minH='155px'>
        {header}
        <Box display={'flex'} justifyContent={'space-between'} p={4} minH={'inherit'}>
          {body}
        </Box>
      </Box>
    </Box>
  );
}

export default AppCard;
