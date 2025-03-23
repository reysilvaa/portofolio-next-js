"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface WantedPosterProps {
  name: string
  title: string
  photo: string
  description: string
  skills: string[]
  reward: string
  callToAction: {
    text: string
    href: string
  }
}

export const WantedPoster: React.FC<WantedPosterProps> = ({
  name,
  title,
  photo,
  description,
  skills,
  reward,
  callToAction
}) => {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Poster Background */}
      <div className="wanted-poster bg-cowboy-parchment dark:bg-cowboy-wood border-8 border-double border-cowboy-leather dark:border-cowboy-gold 
                    p-6 md:p-8 shadow-2xl transform rotate-1 relative z-10">
        {/* Bullet Holes */}
        <div className="absolute top-12 right-12 bullet-holes bullet-hole-1"></div>
        <div className="absolute bottom-20 left-16 bullet-holes bullet-hole-2"></div>
        
        {/* WANTED Text */}
        <div className="text-center mb-4">
          <h2 className="text-6xl md:text-8xl font-western text-cowboy-leather dark:text-cowboy-gold mb-2 tracking-widest">
            WANTED
          </h2>
          <h3 className="text-xl md:text-2xl font-western text-cowboy-leather dark:text-cowboy-gold tracking-wide">
            DEAD OR ALIVE
          </h3>
          <div className="western-divider mx-auto my-4"></div>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Photo */}
          <div className="relative mx-auto">
            <div className="relative w-64 h-80 border-8 border-cowboy-leather dark:border-cowboy-gold overflow-hidden">
              <Image 
                src={photo}
                alt={name}
                fill
                priority
                sizes="(max-width: 768px) 256px, 256px"
                style={{ objectFit: 'cover' }}
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Decorative Corner Stars */}
            <div className="absolute -top-6 -left-6 w-12 h-12 clip-path-star bg-cowboy-gold"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 clip-path-star bg-cowboy-gold"></div>
          </div>
          
          {/* Information */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-western text-cowboy-leather dark:text-cowboy-gold mb-2 tracking-wide">
              {name}
            </h3>
            <p className="text-lg md:text-xl font-scrapbook text-cowboy-rust dark:text-cowboy-sand italic mb-4">
              {title}
            </p>
            
            <p className="font-scrapbook text-cowboy-leather dark:text-cowboy-sand mb-6">
              {description}
            </p>
            
            {/* Skills as Wanted For */}
            <div className="mb-6">
              <h4 className="text-xl font-western text-cowboy-leather dark:text-cowboy-gold mb-2">
                WANTED FOR:
              </h4>
              <ul className="list-none pl-0 space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center font-scrapbook">
                    <span className="inline-block w-4 h-4 mr-2">
                      <svg className="w-full h-full fill-cowboy-leather dark:fill-cowboy-gold" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13.5L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
                      </svg>
                    </span>
                    <span className="text-cowboy-leather dark:text-cowboy-sand">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Reward */}
            <div className="p-3 border-2 border-cowboy-leather dark:border-cowboy-gold bg-cowboy-leather/10 dark:bg-cowboy-gold/10 mb-6">
              <h4 className="text-xl font-western text-cowboy-leather dark:text-cowboy-gold mb-1">
                REWARD
              </h4>
              <p className="font-scrapbook text-cowboy-leather dark:text-cowboy-sand">
                {reward}
              </p>
            </div>
            
            {/* Call to Action */}
            <Link 
              href={callToAction.href}
              className="inline-block px-6 py-3 bg-cowboy-leather dark:bg-cowboy-gold 
                       text-white dark:text-cowboy-wood font-western text-lg tracking-wider
                       border-2 border-cowboy-leather dark:border-cowboy-gold
                       transition-all duration-300 hover:bg-cowboy-rust transform hover:-rotate-2"
            >
              {callToAction.text}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Poster Shadow */}
      <div className="absolute inset-0 bg-cowboy-leather/20 dark:bg-cowboy-gold/20 
                    border-8 border-double border-transparent transform -rotate-1 translate-x-4 translate-y-4 -z-0"></div>
    </div>
  )
}