import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div>
        <img className="absolute -z-10" src={BACKGROUND_IMAGE} 
            alt="bgLogo"
            /> 
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch