import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { checkUser } from '@/lib/checkUser'





const header = async() => {
  await checkUser();
  return (
    <div>
       <header className="border-b border-gray-200 dark:border-gray-700">
             <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-4">
                <div className="flex items-center gap-4 sm:gap-8">
                    <Link href="/" className='flex gap-2'> 
                        <Image src="/logoo.png" alt="Logo" width={140} height={40} className="h-6 sm:h-6 w-auto object-contain cursor-pointer" />
                        <Image src="/profile1.png" alt="Logo" width={140} height={40} className="h-7 sm:h-7 w-auto object-contain cursor-pointer" />
                    </Link>
                </div>
                <div className="flex items-center gap-4">
              <SignedIn>
                        <Link href={"/dashboard"}>
                            <Button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm md:text-base">
                                <LayoutDashboard className='h-4 w-4' />
                                <span className='hidden xs:inline md:block'>Industry Insight</span>
                            </Button>
                        </Link>

                      

              <DropdownMenu>
                 <DropdownMenuTrigger>
                     <Button className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm md:text-base">
                          < StarsIcon className='h-4 w-4' />
                          <span className='hidden xs:inline md:block'>Growth tools</span>
                          < ChevronDown className = "h-4 w-4" />
                      </Button>
                 </DropdownMenuTrigger>

                  <DropdownMenuContent>
                     <DropdownMenuLabel>
                        <Link href={'/resume'}className='flex items-center gap-2'>
                          < FileText className='h-4 w-4' />
                          <span>Build Resume</span>
                        </Link>
                     </DropdownMenuLabel>
                             

                      <DropdownMenuItem>
                          <Link href={'/ai-cover-letter'}className='flex items-center gap-2'>
                          < PenBox className='h-4 w-4' />
                          <span>Cover letter</span>
                        </Link>
                       </DropdownMenuItem>

                       <DropdownMenuItem>
                          <Link href={'/interview'}className='flex items-center gap-2'>
                          < GraduationCap className='h-4 w-4' />
                          <span>Interview Prep</span>
                        </Link>
                       </DropdownMenuItem>
                              
                  </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
            
            
             <SignedOut>
               <SignInButton>
                 <Button variant = "outline" className="bg-[#6c47ff] text-white  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                   Sign In
                 </Button>
               </SignInButton>
            
             </SignedOut>
             <SignedIn>
                  <UserButton
                  appearance={{
                    elements: {
                        // avatarBox: 'h-20 w-20',
                        // userButtonPopoverCard: 'h-10 w-10',
                        // userPreviewMainIdentifier: 'font-semibold'
                    },
                  }}
                  afterSignOutUrl='/'
                   />
             </SignedIn>
              </div>
            </nav>     
          </header>
    </div>
  )
}

export default header