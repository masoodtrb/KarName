'use client';

import { FormEvent } from 'react';
import { IoMdAdd } from 'react-icons/io';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

function CreateQuestion() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <>
      <Button rightIcon={<IoMdAdd />} onClick={onOpen} colorScheme={'green'} variant={'solid'}>
        سوال جدید
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton left={3} right={'auto'} />
          <ModalHeader>ایجاد سوال جدید</ModalHeader>
          <form noValidate onSubmit={submitHandler}>
            <ModalBody>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>موضوع</FormLabel>
                  <Input autoComplete='off' name='title' />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>متن سوال</FormLabel>
                  <Textarea name='body' />
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <HStack spacing={4}>
                <Button color='green' variant={'ghost'} mr={3} onClick={onClose}>
                  انصراف
                </Button>
                <Button colorScheme='green' type='submit'>
                  ایجاد سوال
                </Button>
              </HStack>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateQuestion;
