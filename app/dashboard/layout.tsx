import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-52 lg:w-52 xl:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 xl:p-12 lg:p-10 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}