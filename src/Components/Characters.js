import react from 'react'

export const Character = ({ characters = [] }) => {
  return (
    <div className='row'>

      {characters.map((elem, i) => {
        return (
          <div key={i} className="col mb-2">
            <div className='card'>
              <h1>{elem.name}</h1>
              <img src={elem.image} ></img>
            </div>

          </div>
        )
      })
      }

    </div>
  )
}