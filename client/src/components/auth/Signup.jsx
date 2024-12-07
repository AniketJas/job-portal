import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className=''>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className=''>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className=''>
            <Label>Mobile Number</Label>
            <Input
              type="text"
              placeholder="9862859869"
            />
          </div>
          <div className=''>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="*******"
            />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value="student" className='cursor-pointer' />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' value="recruiter" className='cursor-pointer' />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input accept='image/*' type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">Sign Up</Button>
          <span>
            Already have an account ? <Link to="/login" className='text-blue-600'>Login</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Signup
