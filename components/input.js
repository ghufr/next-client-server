const Input = (props) => (
  <div>
    <input {...props}/>
    <style jsx>{`
      input {
        border: 1px solid grey;
        padding: 8px 16px;
        font-size: 1em;
        box-shadow: none;
      }
    `}</style>
  </div>
)

export default Input