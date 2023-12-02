import { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Layout from '@/components/layout';
import Questions from '@/components/questions';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import { getQueryClient } from '@/libs/helpers/queryClient';

export const metadata: Metadata = {
  title: 'لیست سوالات',
  description: 'لیست سوالات پرسیده شده.',
};

export default async function Home() {
  const client = getQueryClient();

  await QuestionRequest.questionListPrefetch(client);

  return (
    <Layout title='لیست سوالات'>
      <HydrationBoundary state={dehydrate(client, { shouldDehydrateQuery: () => true })}>
        <Questions />
      </HydrationBoundary>
    </Layout>
  );
}
