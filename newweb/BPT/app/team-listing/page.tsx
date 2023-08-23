import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Pratham Sood',
    title: 'Chair',
    email: 'loremipsum@gmail.com',
    github: '+91 7568624103',
    linkedin: '',
    imageUrl:
      'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=',
  },
  {
    name: 'Mehak Thakur',
    title: 'Chair',
    email: 'loremipsum@gmail.com',
    github: '+91 7568624103',
    linkedin: '',
    imageUrl:
      'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=',
  },
  {
    name: 'John Doe',
    title: 'Chair',
    email: 'loremipsum@gmail.com',
    github: '+91 7568624103',
    linkedin: '',
    imageUrl:
      'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=',
  },
  {
    name: 'John Doe',
    title: 'Chair',
    email: 'loremipsum@gmail.com',
    github: '+91 7568624103',
    linkedin: '',
    imageUrl:
      'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=',
  },
  
  
  
  
]

export default function Example() {
  return (

    <div className="mx-auto max-w-7xl bg-white py-24 px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold tracking-tight text-sky-600 sm:text-xl sm:leading-none lg:text-4xl">
                    Our Team Members
        </h2>
    <ul role="list" className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} alt="Profile Image" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Position</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="#"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="h-6 w-6 text-gray-400" aria-hidden="true" alt='Icon'/> 
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="#"
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <img src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' className="h-6 w-10 text-gray-400" aria-hidden="true" alt='Icon' />
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
