import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'languageBtn activeLanguageBtn'
    : 'languageBtn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickLanguageFilter}
        className={btnClassName}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
