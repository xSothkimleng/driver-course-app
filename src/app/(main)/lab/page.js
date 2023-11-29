import PageHeader from '@/components/page-header';
import Card from '@/components/card';
import { IconLogo } from '@/utils/icon';

const LabPage = () => {
  return (
    <div>
      <div>
        <PageHeader>
          <div className='p-[1rem] text-left md:text-center'>
            <p className='font-medium text-2xl text-white'>Study</p>
          </div>
        </PageHeader>
      </div>
      <div className='grid grid-cols-1 gap-4 p-[5%]'>
        <Card>
          <div className='h-[10vh] p-2 flex items-center'>
            <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
            <div className='p-4 w-full '>
              <p className='font-bold tracking-wider pl-5'>Study</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className='h-[10vh] p-2 flex items-center'>
            <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
            <div className='p-4 w-full '>
              <p className='font-bold tracking-wider pl-5'>Road Sign</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className='h-[10vh] p-2 flex items-center'>
            <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
            <div className='p-4 w-full'>
              <p className='font-bold tracking-wider pl-5'>Test</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className='h-[10vh] p-2 flex items-center'>
            <div className='w-[25%] h-full flex items-center'>{IconLogo.questionPencil}</div>
            <div className='p-4 w-full '>
              <p className='font-bold tracking-wider pl-5'>Practice Question</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LabPage;
