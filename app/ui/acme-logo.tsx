import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex  items-center md:text-current md:justify-start justify-between h-fit w-full`}
    >
      <span className='md:w-8 w-6 mr-3'><RocketLaunchIcon /></span>
      <p className="text-3xl">Acme</p>
    </div>
  );
}
