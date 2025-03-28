import React from 'react'

import {useImportScript} from '../../services'
import SingleSlider from './single-slider'


const Slider = ({posts, contacts}) => {
  
  useImportScript("/js/load/slider.js")

  return (
        <SingleSlider posts={posts} contacts={contacts}/>
    )
}

export default Slider
