// Write your code here

import './index.css'

const repositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    issuesCount,
    forksCount,
    starsCount,
  } = repositoryDetails

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default repositoryItem
