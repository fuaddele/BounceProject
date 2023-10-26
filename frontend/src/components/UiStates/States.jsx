import PropTypes from 'prop-types';
import './States.css'

Loader.propTypes = {
  loaderMessage: PropTypes.string
}

function Loader({
  loaderMessage
}) {
  return (
    <div className="loader-wrapper">
      <span className="loader-main">&nbsp;</span>
      {loaderMessage ? <p className="loader-message">{loaderMessage}</p> : null}
    </div>
  )
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

function ErrorMessage({
  errorMessage
}) {
  return (
    <div className="error-wrapper">
      <p className="error-message">{errorMessage}</p>
    </div>
  )
}

export {
  Loader,
  ErrorMessage
}