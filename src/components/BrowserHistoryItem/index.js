import './index.css'

const BrowserHistoryItem = props => {
  const {browserItemDetails, deleteHistoryList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserItemDetails

  const onClickDelete = () => {
    deleteHistoryList(id)
  }

  return (
    <li className="list">
      <div className="c">
        <p className="time">{timeAccessed}</p>
        <img
          src={logoUrl}
          alt="domain logo"
          height="25px"
          width="25px"
          className="domain-logo"
        />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            height="15px"
            width="15px"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
