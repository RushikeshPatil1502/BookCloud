import React from 'react'
import FeatureCards from './FeatureCards'

function Features() {
     const features = [
    {
      title: "Capture Pages",
      icon: "📷",
      description: [
        "Easily upload book pages using your phone or scanner.",
        "Supports multiple formats (JPG, PNG, PDF).",
        "Smart cropping and clarity enhancements."
      ],
    },
    {
      title: "AI Narration",
      icon: "🤖",
      description: [
        "Turn text into natural, human-like speech instantly.",
        "Choose from multiple AI voice options.",
        "Adjust speed, tone, and style for your preference."
      ],
    },
    {
      title: "Personal Library",
      icon: "🎧",
      description: [
        "Save your audiobooks securely in one place.",
        "Organize by book cover, author, or genre.",
        "Resume playback where you left off."
      ],
    }
  ]

  return (
    <div className='flex flex-col justify-between gap-4 mt-4 px-12 py-12'>
       <h1 className='text-6xl font-bold ml-16 mb-4'>Features</h1>
       
       <div className='flex flex-row justify-around'>
                {
                features.map((feature , index) => 
                <FeatureCards key={index} 
                title={feature.title} 
                description={feature.description} />
                )
            }
        </div>
    </div>
  )
}

export default Features