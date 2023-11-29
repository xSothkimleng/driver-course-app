import Card from '..';
import Link from 'next/link';
import { IconLogo } from '@/utils/icon';
import Image from 'next/image';

const ImageDetailCard = ({ image, detail, url, readTime, colorNormal, arrowRight }) => {
  return (
    <Card>
      <Link href={url ? url : '#'}>
        <div className='h-[10vh] p-2 flex items-center'>
          <div className='w-[25%] h-full flex items-center'>
            <Image
              src={image ? image : '/assets/image/driver.png'}
              alt='logo'
              width={100}
              height={100}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className='p-4 w-full '>
            <p className={`font-medium ${colorNormal ? 'black' : 'text-[#F0A714]'}  leading-5`}>
              {detail}
            </p>
            {readTime && <p className='text-xs text-gray-500 leading-5'>{readTime} min</p>}
          </div>
          {arrowRight && <div className='w-10 h-10 flex items-center '>{IconLogo?.arrowRight}</div>}
        </div>
      </Link>
    </Card>
  );
};

export default ImageDetailCard;
