import { getUserOnboardingStatus } from '@/actions/user';
import React from 'react'

const IndustryInsightsPage = async() => {

    const {isOnboarded} = await getUserOnboardingStatus();
  
    if(!isOnboarded){
      redirect("/onboarding");
    }

  return (
    <div>IndustryInsightsPage</div>
  )
}

export default IndustryInsightsPage;