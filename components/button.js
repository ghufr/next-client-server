const Button = ({ children, ...rest }) => (
  <button {...rest}>
    {children}
    <style jsx>{`
      button {
        padding: 8px 12px;
        font-size: 1em;
        border-radius: .5em;
        border: none;
        backround-color: palevioletred;
      }
    `}
    </style>
  </button>
)

export default Button