'use client';
import React, { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import { cn } from "@/lib/utils";

const VerifyCodePage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [error, setError] = useState('');
  const router = useRouter();

  if (!isLoaded || !signUp) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  const verifyCode = async (e) => {
    e.preventDefault();
    setVerificationStatus('verifying');
    setError('');

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (result.status === 'complete') {
        setVerificationStatus('complete');
        // Set the active session
        await setActive({ session: result.createdSessionId });
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setVerificationStatus('incomplete');
        setError('Verification incomplete. Please try again.');
      }
    } catch (err) {
      console.error('Error verifying code:', err);
      setVerificationStatus('error');
      setError(err.errors?.[0]?.message || 'Invalid verification code');
    }
  };

  const resendVerificationEmail = async () => {
    try {
      setVerificationStatus('sending');
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });
      setVerificationStatus('sent');
    } catch (err) {
      console.error('Error sending verification email:', err);
      setError(err.errors?.[0]?.message || 'Failed to send verification email');
      setVerificationStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-input mx-auto w-full relative bg-[#ffffff] max-w-md p-4 rounded-xl md:p-8">
        <Image width={250} height={250} alt="WelcomPets" className="rounded-t-xl absolute right-0 -top-[170px]" src='/assets/image/verifyCode.png' />
        <h2 className="text-xl font-bold text-neutral-800">
          Verify Your Email
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600">
          Enter the verification code sent to your email
        </p>
        
        {error && (
          <div className="mt-4 text-sm text-red-500">
            {error}
          </div>
        )}
        
        <form className="my-8" onSubmit={verifyCode}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="code">Verification Code</Label>
            <Input 
              id="code" 
              placeholder="Enter code" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 from-zinc-900 to-zinc-900 "
            type="submit"
            disabled={verificationStatus === 'verifying'}
          >
            {verificationStatus === 'verifying' ? 'Verifying...' : 'Verify Code'}
            <BottomGradient />
          </button>
          
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={resendVerificationEmail}
              className="text-sm text-blue-600 hover:underline"
              disabled={verificationStatus === 'sending'}
            >
              {verificationStatus === 'sending' ? 'Sending...' : 'Resend verification code'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyCodePage;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}; 