import React from 'react'

const JobCard = () => {
  return (
    <div className="border p-3 m-4 rounded-xl flex">
      <div>
        <h1 className="font-bold text-xl">Senior Software Developer</h1>
        <p className="text-lg">
          Developing robust software solutions using Java, Python, and
          JavaScript technologies for Tech Innovations Inc
        </p>
        <div>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            Java
          </button>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            Python
          </button>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            Javascript
          </button>
        </div>
        <button className="bg-orange-100 font-bold p-2 px-6 m-1" disabled>
          $5000
        </button>
      </div>
          <div className='ml-96 mt-24'>
              <button className='p-2 bg-teal-200 rounded-xl px-6 text-xl bg-opacity-50 hover:bg-opacity-100'>
                  Apply
              </button>
      </div>
    </div>
  );
}

export default JobCard