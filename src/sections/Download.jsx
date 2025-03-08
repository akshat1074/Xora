import React from 'react';
import {links,logo} from '../constants/index.jsx';
import { Marker } from '../Components/Marker.jsx';
import {Element} from 'react-scroll0;'

const Download = () => {
  return (
    <section>
        <Element
              name='download'
              className='g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16'>
            <div className='container'>
                <div className='flex items-center'>
                    <div className='relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100'>
                        <div className='mb-10'>
                            <img
                             className='/images/xora.svg'
                             width={160}
                             height={55}
                             alt='xora'
                             />

                        </div>
                        <p className='body-1 mb-10 max-w-md' >Try it now for free on iOS, Android, PC, Web - whatever your
                        flavor, we've got you covered.</p>
                        <ul>
                            {links.map(({id,url,icon})=>(
                                <li 
                                   key={id}
                                   className='download_tech-link download_tech-link_last-before download_tech-link_last-after'>
                                    <a 
                                      href={url}
                                      className='size-22 download_tech-icon_before relative flex items-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500'>
                                        <span className='absolute -top-2 rotate-90'>
                                            <Marker/>
                                        </span>
                                        <img
                                         src={'/images/lines.svg'}
                                         alt='lines'
                                         className='absolute size-130/20 object-contain'
                                        
                                        />


                                        <span className='download_tech-icon'>{icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </Element>

    </section>
  )
}

export default Download