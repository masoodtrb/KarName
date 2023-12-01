import { PropsWithChildren } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import CreateQuestion from '../createQuestion';

interface Props extends PropsWithChildren<unknown> {
  title?: string;
}

function Layout({ title, children }: Props) {
  return (
    <Box>
      <Flex justifyContent={'space-between'} py={4} px={14} backgroundColor={'white'}>
        <Box>
          <Heading>{title}</Heading>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <CreateQuestion />
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}></Box>
        </Box>
      </Flex>
      <Box backgroundColor={'#F7F8F9'} minH={'100vh'} px={14} py={8}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
