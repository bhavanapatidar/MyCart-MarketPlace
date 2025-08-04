import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../../assets/iphone-14-pro.webp';
import mac from '../../../assets/mac-system-cut.jfif';

const HomePage = () => {
  return (
    <div>
        <HeroSection 
            title="Buy iPhone 14 Pro"
            subtitle="Experience the future of smartphones with the iPhone 14 Pro."
            link="/products/iphone-14-pro"
            image={iphone}
        
        />
         <HeroSection 
            title="Build the ultimaate setup with Mac"
            subtitle="You can add Studio Display and colorful Magic Keyboard and Mouse to your Mac."
            link="/products/iphone-14-pro"
            image={mac}
        
        />       
    </div>
  )
}

export default HomePage