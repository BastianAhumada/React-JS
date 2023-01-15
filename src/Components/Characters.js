import Pagination from '@mui/material/Pagination'
import React, { useEffect, useState } from 'react';


export const Character = ({ characters = [] }) => {

  const [paginationvalue, setPaginationValue] = useState(30)


  useEffect(() =>
  {}
  ,[])
  return (
    <div className='container'>
      <div className='row'>
        {characters.map((elem, i) => {
          return (
            <div key={i} className="col mb-2">
              <div className='card'>
                <h1 className='text-center'>{elem.name}</h1>
                <img src={elem.image} ></img>
                <a href='/episodes'> Episodes </a>
              </div>

            </div>
          )
        })
        }

      </div>
    </div>
  )
}

