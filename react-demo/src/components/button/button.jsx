

// eslint-disable-next-line react/prop-types
export const Button = ({ styles, onClick, children }) => {

  const defaultStyles = {
    'background-color': 'blue',
    color: 'white',
    'font-size': '1.5rem',
    'border-radius': '5px',
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
  }

  return (
    <button style={{ ...defaultStyles, ...styles }} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
