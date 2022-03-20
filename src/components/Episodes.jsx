import React from 'react'
import { CardEpisodes } from './CardEpisodes'

export const Episodes = ({episodes}) => {


  return (
    <div>
        <h1>Episodes</h1>
        <div>
            {
                episodes === "" ? (
                    <CardEpisodes episodes={episodes} />
                ) : (
                
            episodes?.map((episode) => (
                <CardEpisodes key={episode?.id} episode={episode} />
            ))
                )
            }
    </div>
    </div>
  )
}
