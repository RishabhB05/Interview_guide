import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const OnboardingPage = async() => {
  
  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded){
    redirect("/dashboard");
  }


  return (
    <main>
      <div>
        <OnboardingForm  industries = {industries}  />
      </div>
    </main>
  )
}

export default OnboardingPage;
