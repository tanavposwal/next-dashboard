import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex w-full items-end rounded-lg text-blue-500 shadow-md border-2 md:px-3 px-3 md:h-36 border-blue-500">
          <AcmeLogo />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}