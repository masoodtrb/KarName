'use client';

import { PropsWithChildren } from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';

interface Props extends PropsWithChildren {
  title: string;
  image?: string;
  imageBoxSize?: number;
  imageRounded?: string;
}

function CardHeader({ title, image, imageBoxSize, imageRounded, children }: Props) {
  return (
    <Box
      boxShadow={'xs'}
      backgroundColor={'white'}
      dropShadow={'xs'}
      borderRadius='8px'
      width={'100%'}
      minH={12}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={4}
    >
      <HStack spacing={2}>
        {image && <Image src={image} alt='' boxSize={imageBoxSize || 8} rounded={imageRounded || 'md'} />}
        <Heading as={'h2'} size={'sm'} fontWeight={700}>
          {title}
        </Heading>
      </HStack>
      <HStack spacing={5} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        {children}
      </HStack>
    </Box>
  );
}

export default CardHeader;
