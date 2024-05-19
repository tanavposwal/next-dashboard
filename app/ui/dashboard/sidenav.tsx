import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/solid';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col sm:px-3 sm:py-4 md:px-2 p-0 transition-all">
      <Link
        className="sm:mb-2 mb-0 flex h-16 sm:items-end sm:justify-start sm:rounded-md  bg-white p-4 md:h-40 shadow sm:border-blue-600 border-2 sm:h-auto items-center justify-start"
        href="/"
      >
        <div className="text-blue-600">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between sm:divide-x-0 sm:space-x-2 md:flex-col md:space-x-0 md:space-y-2 space-x-0 divide-x-2">
        <NavLinks />
        <div className="hidden sm:h-auto h-0 w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 sm:rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
