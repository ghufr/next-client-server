const Theme = {
  pink: 'palevioletred',
  grey: 'darkslategrey'
}

const Button = ({ children, variant, ...rest }) => (
  <button {...rest}>
    {children}
    <style jsx>{`
      button {
        padding: 8px 12px;
        font-size: 1em;
        border-radius: .5em;
        border: none;
        color: #fff;
        background-color: ${Theme[variant] || 'red'};
      }
    `}
    </style>
  </button>
)

export default Button