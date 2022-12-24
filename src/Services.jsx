import React from 'react'
import Card from './Card';



const Services = () => {
    return (
        <section className='section-service my-5 d-flex flex-column'>
            <h1 className='text-center mb-3'>Our Services</h1>
            <div className='d-flex flex-row gap-3 m-4 flex-wrap'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    );
}

export default Services
