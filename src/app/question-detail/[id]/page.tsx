import { Metadata } from 'next';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Layout from '@/components/layout';
import QuestionComment from '@/components/questionComment';
import { QuestionRequest } from '@/libs/apiCall/entity/questions';
import { getQueryClient } from '@/libs/helpers/queryClient';

export const metadata: Metadata = {
  title: 'جزییات سوال',
  description: 'جزییات سوال پرسیده شده.',
};
async function QuestionDetail({ params }: { params: { id: string } }) {
  const qc = getQueryClient();

  await QuestionRequest.questionLoadPrefetch(qc, parseInt(params.id));
  await QuestionRequest.questionLoadCommentPrefetch(qc, parseInt(params.id));

  return (
    <Layout title='جزییات سوال'>
      <HydrationBoundary state={dehydrate(qc)}>
        <QuestionComment />
      </HydrationBoundary>
    </Layout>
  );
}

export default QuestionDetail;
