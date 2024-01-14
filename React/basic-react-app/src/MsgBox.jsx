import PropTypes from 'prop-types';

export default function MsgBox({userName,textColor}) {
    let styles = {color: textColor};
  return <>
  <h1 style={styles}>Hello, {userName}</h1>
  </>;
}

MsgBox.propTypes = {
    userName: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
};