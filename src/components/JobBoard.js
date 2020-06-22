import React from "react";

// var data =   {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "images/photosnap.svg",
//     "isNew": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   }
const JobBoard = ({ job: { company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
} }) => (

        <div className='flex bg-white shadow-md m-4 p-4'>
            <img src={logo} alt={company} />
            <div className='ml-4'>
                <h3 className='font-bold text-teal-500'>{company}</h3>
                <h2 className='font-bold text-xl'>{position}</h2>
                <p className='text-gray-700'>
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div></div>
        </div>

    )

export default JobBoard;