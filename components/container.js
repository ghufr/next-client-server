const Container = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        max-width: 40em;
        margin: 0 auto;
      }
    `}
    </style>
  </div>
)

export default Container