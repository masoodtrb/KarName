import { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Layout from '@/components/layout';
import Questions from '@/components/questions';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'لیست سوالات',
  description: 'لیست سوالات پرسیده شده.',
};

export default async function Home() {
  const queryClient = new QueryClient();
  await QuestionRequest.questionListPrefetch(queryClient);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Layout title='لیست سوالات'>
        <Questions />
      </Layout>
    </HydrationBoundary>
  );
}
