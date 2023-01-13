import react from 'react'
import { Episodes } from './Episodes'

export const Character = ({ characters = [] }) => {
  return (
    <div className='row'>

      {characters.map((elem, i) => {
        return (
          <div key={i} className="col mb-2">
            <div className='card'>
              <h1 className='text-center'>{elem.name}</h1>
              <img src={elem.image} ></img>
              <a href='/about'>
                <Episodes episodes={elem.episode} />
              </a>
            </div>

          </div>
        )
      })
      }

    </div>
  )
}


function changePag(episodes = []) {
  console.log('Episodes', episodes)
}

