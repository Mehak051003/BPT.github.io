"use client"
import css from "./home.module.scss"





const people = [
    {
        name: 'Pratham Sood',
        role: 'A',
        imageUrl:
           ''
    },
    {
        name: 'Mehak Thakur',
        role: 'B',
        imageUrl:
            'public\team\franco.jpg',
    },
    {
        name: 'Franco Fruggierro',
        role: 'C',
        imageUrl:
            "franco.png",
    },
    {
        name: 'William Flores',
        role: 'D',
        imageUrl:
            "william.png",
    },
    
]




import { CheckIcon } from '@heroicons/react/24/outline'

const pricing = {
    tiers: [
        {
            title: 'Resources',
            description: 'The essentials to provide your best work for clients.',
            features: [
              'Byte Power Technologies is a rapidly growing Web3 IT company.', 
              'It provides clear vision of advanced technology and digital services.', 
              'Latest technology trends, industry news, and events.', 
              
              ],
              mostPopular:true,
          },
          {
            title: 'Innovation Support',
            description: 'A plan that scales with your rapidly growing business.',
            features: [
              'Fuel your innovation journry with our dedicated support.',
              'Attend and contribute in technology conferences.',
              'Connect with industry and academic professionals.',
              'Guiding you toward success and growth.',
              
            ],
            mostPopular:true,
          },
          {
            title: 'Innovation to Reality',
            description: 'Dedicated support and infrastructure for your company.',
            features: [
              'Tranform your innovative ideas into tangible reality',
              'Get our expert guidance and implementation support',
              'Collaborate with Byte Power Technologies',
            ],
            mostPopular:true,
          },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



// Services Page Carousel imports

import useEmblaCarousel from 'embla-carousel-react'
import Card from '@/components/carousel/card';
import Slider from '@/components/carousel/slider';

const data = [
  {

    "title": "Web Design and Development",
    "content":"Our web designers are creative and professionals skilled in ui ux design and JavaScript Frameworks, and use their knowledge to create visually appealing and user-friendly websites that meet the specific needs of our clients.",
    "imgSrc": "image.png",
    "adrs":"",
  },
  {

    "title": "Nft Artists",
    "content": "Our NFT artists are creative professionals who use their skills in digital art and graphic design to create unique and visually appealing 2d & 3d NFTs for our clients, whether for personal projects or for commercial purposes.",
    "imgSrc": "image (1).png",
    "adrs":"",
  },
  {

    "title": "Smart Contract",
    "content": "Our Smart Contract Developers possess extensive knowledge of smart contract programming languages such as Solidity, and use this expertise to create secure, reliable, and automated decentralized applications for our clients.",
    "imgSrc": "image (2).png",
    "adrs":"",
  },
  {

    "title": "Create ur Own Cryto",
    "content": "Our Cryptocurrency Developers possess extensive knowledge of cryptocurrency protocols and the latest developments in the crypto space, and use their expertise to create secure, reliable, and scalable solutions for our clients.",
    "imgSrc": "image (3).png",
    "adrs":"",
  },
  

  
  
]










// -------------------------------------------------------------------


export default function Home() {
    return (

        <div>


            


            {/* Main Page-1 */}





            <main className={css.root}>
                <div className={css.logo}>
                    <img src="/techlogo.png" alt="BPT" />
                </div>

                <div className={css.heading}>
                    <h1>Transforming Dreams into Reality</h1>
                </div>

                <div className={css.actions}>
                    <a href="/registration"> 
                        <button className={css.join}>Join Us!</button>
                    </a>
                </div>

            </main>





            {/* //  Page 2 --- About Page */}






            <div id="about" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="min-h-screen mx-auto max-w-7xl px-6 lg:px-8" >

                    {/* About Us */}

                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                        Byte Power Technologies is a leading Web3 technology and development services that empower creators to build more secure, transparent and user-centric online experiences.<br></br>
                        Our team of skilled developers, designers, and blockchain experts offer a range of services in building the future of Web3 technology.<br></br>
                        At Byte Power Technologies, we are committed to driving innovation and transforming the digital landscape through cutting-edge Web3 technology. With a relentless focus on security, transparency, and user-centric design, we empower creators to craft online experiences that redefine the way we interact with the digital world.<br></br>
                        Our diverse team brings together a wealth of expertise, including skilled developers who are at the forefront of the rapidly evolving Web3 ecosystem. From blockchain experts who understand the intricacies of decentralized systems to visionary designers who bring creativity to every pixel, our collective knowledge enables us to provide comprehensive solutions that meet the unique needs of our clients.<br></br>
                        We arenot just building websites; we are crafting the future of digital interaction. Through services tailored to Web3 development, we create platforms that leverage the power of blockchain, smart contracts, and decentralized applications. By embracing these technologies, we are unlocking new levels of trust, security, and collaboration in online experiences.<br></br>
                        Byte Power Technologies stands as a pioneer in the Web3 revolution, dedicated to pushing the boundaries of what is possible. Join us on this transformative journey as we shape the digital landscape for a more connected, secure, and decentralized tomorrow.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            
                           
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            
                        </dl>
                    </div>
                </div>
            </div>





            {/* Page 3 - Events Page */}


            
            
            <div id="services" className={css.wrapper}>
                <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none lg:text-6xl">
                    Our Services
                </h2>
                <Slider slides={data} />
            </div>





            {/* Page 5 - BPT BENEFITS PAGE*/}





            <div className="mx-auto max-w-7xl bg-white py-24 px-6 lg:px-8">
            {/* <div className={css.wrapper}> */}
                <h2 className="text-center text-3xl font-bold tracking-tight text-sky-600 sm:text-5xl sm:leading-none lg:text-6xl">
                   Benefits
                </h2>
                <center><p className="text-center mt-6 max-w-2xl text-xl text-grey-700"> 
                    Why hire Byte Power Technologies for your Project?
                </p></center>

                {/* Tiers */}
                <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                    {pricing.tiers.map((tier) => (
                        <div
                            key={tier.title}
                            className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                        >
                            <div className="flex-1">
                                <h3 className="text-center text-xl font-semibold text-gray-900">{tier.title}</h3>
                                {/* {tier.mostPopular ? (
                                        <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">
                                        Most popular
                                        </p>
                                    ) : null}
                                    <p className="mt-4 flex items-baseline text-gray-900">
                                        <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                                        <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                                    </p> */}
                                <p className="mt-6 text-gray-500">{tier.description}</p>

                                {/* Feature list */}
                                <ul role="list" className="mt-6 space-y-6">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex">
                                            <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                                            <span className="ml-3 text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* <a
                                href="#"
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                )}
                            >
                              
                            </a> */}
                        </div>
                    ))}
                </div>
            </div>
           





            {/* Page 6 - Team Page */}




            <div id="team" className="min-h-screen bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3" >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        It is the long history of humankind that those who learned to collaborate
                            and improvise most effectively have prevailed. - Charles Darwin
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>





        // Page 7 - XYZ





    )
}
