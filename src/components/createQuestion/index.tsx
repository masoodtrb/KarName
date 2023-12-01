'use client';

import { FormEvent, useRef } from 'react';
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
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import { lastQId } from '@/libs/helpers/lastQuestionId';

function CreateQuestion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const title = useRef<HTMLInputElement>(null);
  const body = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync } = QuestionRequest.useCreateQuestion();

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (title.current && body.current) {
      const lastQuestionId = lastQId();
      const data = {
        usersId: 4,
        id: lastQuestionId + 1,
        title: title.current?.value,
        body: body.current?.value,
        createdAt: Date.now(),
      };

      await mutateAsync(data as Questions);
      onClose();
    }
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
                  <Input autoComplete='off' name='title' ref={title} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>متن سوال</FormLabel>
                  <Textarea name='body' ref={body} />
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
