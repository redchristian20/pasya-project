import React from 'react'
import Header from '../components/Header/Header'
import Header_trial from '../components/Header/Header_trial'
import Hero from '../components/Hero/Hero'
import Contents from '../components/Contents/Contents'
import Footer from '../components/Footer/Footer'
import '../index.css'

export default function Root() {
  return (
    <>
      <Header_trial/>
      <Hero/>
      <Contents/>
      <Footer/>
    </>
  );
}