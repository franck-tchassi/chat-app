"use client"

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigation} from '@/hooks/useNavigation'
import { UserButton } from '@clerk/clerk-react';
import Link from 'next/link';

const MobileNav = () => {

  const paths = useNavigation();
  return (
    <Card className='fixed bottom-4 w-[calc(100vh-32px)] 
    flex items-center h-16 p-2 lg:hidden '>
        
        <nav className='w-full'>
            <ul className='flex items-center justify-evenly'>{
                paths.map((path, id) =>{
                    return (
                          <li key={id} className='relative'>
                                  <Link href={path.href}>
                                      <Tooltip>
                                          <TooltipTrigger>
                                              <Button size="icon" variant={path.active? "default": "outline"}>
                                                  {path.icon}
                                              </Button>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                              <p>{path.name}</p>
                                          </TooltipContent>
                                      </Tooltip>
                                  </Link>
                          </li>
                    )
                })
            }
              <li>
                <UserButton />
              </li>

            </ul>
        </nav>
        
    </Card>
  )
}

export default MobileNav