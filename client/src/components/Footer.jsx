const Footer = () => {
  return (
    <footer className='border-t-2 border-t-gray-200 py-8'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-bold'>Job Portal</h2>
            <p className='text-sm'>@ 2025 YoursTruly Company. All rights reserved</p>
          </div>

          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.412c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.793.144v3.24l-1.917.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.209 24 24 23.226 24 22.271V1.729C24 .774 23.209 0 22.225 0zM7.119 20.452H3.562V9.086h3.557v11.366zM5.34 7.663a2.064 2.064 0 1 1 .001-4.129 2.064 2.064 0 0 1-.001 4.129zM20.449 20.452h-3.556v-5.463c0-1.303-.026-2.977-1.815-2.977-1.816 0-2.096 1.419-2.096 2.887v5.553h-3.555V9.086h3.414v1.553h.048c.475-.9 1.634-1.847 3.366-1.847 3.596 0 4.26 2.366 4.26 5.44v6.22z" />
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a href="#" className="hover:text-gray-400" aria-label="X">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.001.974-3.127 1.195-.897-.959-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.917 0 .386.045.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.316 0-.624-.03-.927-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.104-6.115 2.104-.398 0-.79-.023-1.175-.067 2.179 1.394 4.768 2.207 7.548 2.207 9.057 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.013-.637.961-.694 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
