import { Stack } from '@chakra-ui/react';
import Layout from '@/components/layout';
import QuestionCard from '@/components/questionCard';

export default function Home() {
  return (
    <Layout title='لیست سوالات'>
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
      </Stack>
    </Layout>
  );
}
