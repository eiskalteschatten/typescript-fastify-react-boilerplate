import PageSuspense from '../PageSuspense';

const ComponentWithSuspense: React.FC<{ node: React.ReactNode }> = ({ node }) => {
  return (
    <PageSuspense>
      {node}
    </PageSuspense>
  );
};

export default ComponentWithSuspense;
