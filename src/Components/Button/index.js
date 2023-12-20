import './Button.scss';

const Button = ({variation, children}) => {
  return (
    <button className={variation}>
            {children}
    </button>
  )
}

export default Button;