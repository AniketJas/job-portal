import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Link } from 'react-router-dom'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'

const Navbar = () => {

  const user = false;

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='font-bold text-2xl'>Job<span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-5'>
          <ul className='flex items-center gap-5 font-medium'>
            {/* <li><Link>Home</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Browse</Link></li> */}
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-4'>
                <Button variant='outline'>Login</Button>
                <Button className='bg-[#6a38c2] hover:bg-[#43217c]'>Signup</Button>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div>
                    <div className='flex gap-4'>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-semibold'>Aniket Jas</h4>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                      </div>
                    </div>
                    <div className='flex flex-col text-gray-700 my-2'>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
