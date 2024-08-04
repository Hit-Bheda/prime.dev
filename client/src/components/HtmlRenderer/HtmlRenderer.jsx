import PropTypes from 'prop-types';

function HtmlRenderer({htmlContent}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} style={{color:"#fff"}}></div>
  )
}

HtmlRenderer.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};
export default HtmlRenderer