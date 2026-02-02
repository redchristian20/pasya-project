import React from 'react'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
        <section class="bg-cover bg-no-repeat bg-[url('rice_terraces.jpg')] bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <img class="h-auto max-w-sm mx-auto" src="/pasya.png" alt="image description"/>
                <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-green-500 md:text-2xl lg:text-3xl dark:text-white">PASYA: Predictive Analytics for Yield Advancement </h1>
                <p class="mb-8 text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-42 dark:text-gray-400">Harvest Intelligence, Grow with Certainty</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                        Learn how it works
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-green-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <img src="/growing_plant.svg" alt="Icon Description" />
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">10,000+ Hectares monitored</h2>
                    </div>
                    <div class="bg-green-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <img src="/growth_arrow.svg" alt="Icon Description" />
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">+20% Yeilds</h2>
                    </div>
                    <div class="bg-green-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <img src="/leaf.svg" alt="Icon Description" />
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">15% reduced food waste</h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4">
                <div>                    
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-screen-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-4">
                        <img class="object-cover w-full rounded-base h-128 md:h-full md:w-128 mb-4 md:mb-0" src="/strawberry_farm.jpg" alt=""/>
                        <div class="flex flex-col justify-between md:p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Data-Driven Precision</h5>
                            <p class="mb-6 text-body">Our models are trained on 10+ years of regional data, achieving over 90% accuracy in trend forecasting for key highland vegetables.</p>
                            <p class="mb-6 text-body">Using advanced machine learning algorithms and real-time weather data integration, PASYA empowers farmers to make informed decisions about planting, harvesting, and resource allocation.</p>
                            <div>
                                <button type="button" class="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                    Read more
                                    <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 mt-8 mb-8">
                    <img class="mx-auto object-cover w-full rounded-base h-64 md:h-full md:w-48 mb-4 md:mb-8" src="/doa_icon.png" alt=""/>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">The Department of Agriculture is the principal government agency responsible for the promotion of the agricultural development and growth. 
                        It provides the policy framework, helps direct public investments, and in partnership with the local government units (LGUs), 
                        provides the support services necessary to make agriculture and agri-based enterprises profitable and help spread the benefits of development to the poor, particularly those in the rural areas.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Our Mission</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Visual forecasts of crop yields based on historical and seasonal data </p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </a>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Our Vission</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Insights on optimal planting and harvesting periods </p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero