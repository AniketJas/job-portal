import { Bookmark } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {

  const navigate = useNavigate();
  const jobId = "sakfhvaufvbslhb"

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-md text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm test-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos accusamus adipisci soluta pariatur ipsum et odit veniam velit officiis?</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <Badge className="text-blue-700 font-bold" variant="ghost">12 Position</Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost"> Full time</Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">24LPA</Badge>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  )
}

export default Job
