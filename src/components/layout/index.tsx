import { PropsWithChildren } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

interface Props extends PropsWithChildren<unknown> {
  title?: string;
}

function Layout({ title, children }: Props) {
  return (
    <Box px={14}>
      <Flex justifyContent={'space-between'} py={4} px={14} mx={-14} backgroundColor={'white'}>
        <Box>
          <Heading>{title}</Heading>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Button rightIcon={<IoMdAdd />} colorScheme={'green'} variant={'solid'}>
            سوال جدید
          </Button>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}></Box>
        </Box>
      </Flex>
      <main>{children}</main>
    </Box>
  );
}

export default Layout;
