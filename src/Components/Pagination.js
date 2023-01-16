import react from 'react'

export function Pagination({ prev, next, onPrevious, onNext }) {

  const handlePrevius = () => {
    onPrevious()
  }

  const handleNext = () => {
    onNext()
  }


  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {prev ? (
          <li className='page-item'><button className='page-link' onClick={handlePrevius}>Anterior</button></li>
        ) :
          null
        }
        {next ? (
          <li className='page-item'><button className='page-link' onClick={handleNext}> Siguiente</button></li>
        )
          :
          null
        }
      </ul>

    </nav>
  )
}

