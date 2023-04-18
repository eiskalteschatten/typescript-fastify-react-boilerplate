import FullPageSuspense from '@/components/FullPageSuspense';

export const Loadable = (Component: any) => (props: any) => (
  <FullPageSuspense>
    <Component {...props} />
  </FullPageSuspense>
);

export default Loadable;
