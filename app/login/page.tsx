import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from '../ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <LoginForm/>
      {/* <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Log in to your account</strong>
              <form>
                <label htmlFor='email-field'>Email </label>
                <input type='email' id='email-field'></input><br></br>
                <label htmlFor='password-field'>Password </label>
                <input type='password' id='password-field'></input>
              </form>
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        {/* </div> */}
      {/* </div> */}
    </main>
  );
}
