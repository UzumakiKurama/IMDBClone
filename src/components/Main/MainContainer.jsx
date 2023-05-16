import React from 'react'

const MainContainer = ({results}) => {
  console.log(results)
  return (
    <div>
        {results.map(element=>(
            <div key={element.id}>
                {element.original_title}
            </div>
        ))}
    </div>
  )
}

export default MainContainer