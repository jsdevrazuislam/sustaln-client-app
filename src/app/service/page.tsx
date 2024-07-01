import Certificates from '@/sections/service/Certificates'
import ServiceHome from '@/sections/service/ServiceHome'
import ServicePrice from '@/sections/service/ServicePrice'
import React from 'react'

const ServicePage = () => {
  return (
    <>
        <ServiceHome />
        <ServicePrice />
        <Certificates />
    </>
  )
}

export default ServicePage