const Card = ({ children }) => (
  <div className='wrapper'>
    <div className='body'>
      {children}
    </div>
    
    {/* Styling */}
    <style jsx>{`
      .wrapper {
        border: 1px solid grey;
        border-radius: .5em;
      }
      .body {
        padding: 16px;
      }
    `}</style>
  </div>
)

export default Card