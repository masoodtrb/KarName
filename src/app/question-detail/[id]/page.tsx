import { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Layout from '@/components/layout';
import QuestionComment from '@/components/questionComment';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';

interface Props {}

export const metadata: Metadata = {
  title: 'جزییات سوال',
  description: 'جزییات سوال پرسیده شده.',
};
async function QuestionDetail({ params }: { params: { id: string } }) {
  const qc = new QueryClient();
  await QuestionRequest.questionLoadPrefetch(qc, parseInt(params.id));

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <Layout title='جزییات سوال'>
        <QuestionComment />
      </Layout>
    </HydrationBoundary>
  );
}

export default QuestionDetail;
