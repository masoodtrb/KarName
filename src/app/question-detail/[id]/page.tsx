import { Button, FormControl, FormLabel, Heading, Stack, Textarea } from '@chakra-ui/react';
import AnswerCard from '@/components/answerCard';
import Layout from '@/components/layout';
import QuestionCard from '@/components/questionCard';

interface Props {}

function QuestionDetail(props: Props) {
  const {} = props;

  return (
    <Layout title='جزییات سوال'>
      <Stack spacing={8}>
        <QuestionCard
          dateTime={1701369330692}
          userImage={'https://randomuser.me/api/portraits/men/57.jpg'}
          title={'مشکل در Auth در React'}
          body={
            'سلام من میخوام یه authentication ساده تو react بسازم اما این error رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که ببینید دقیقا چه مشکلی وجود داره'
          }
          id='1'
        />
        <Heading as={'h2'} size={'md'}>
          پاسخ ها
        </Heading>
        <Stack spacing={8}>
          <AnswerCard
            dateTime={1701369330692}
            title='علی کیا'
            userImage={'https://randomuser.me/api/portraits/men/57.jpg'}
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nisi illo! Quo quas eveniet molestiae saepe modi, quasi consequuntur esse nostrum illo sint, consectetur ut recusandae fuga laborum maiores? Eius.'
          />
        </Stack>
        <Stack>
          <Heading as={'h2'} size={'md'}>
            پاسخ خود را ثبت کنید
          </Heading>
          <form>
            <Stack>
              <FormControl isRequired>
                <FormLabel>پاسخ خود را بنویسید</FormLabel>
                <Textarea backgroundColor={'white'} name='body' placeContent={'متن پاسخ...'} />
              </FormControl>
              <Button colorScheme='green' width={'fit-content'}>
                ارسال پاسخ
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Layout>
  );
}

export default QuestionDetail;
