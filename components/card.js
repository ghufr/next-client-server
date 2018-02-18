const Card = ({ children }) => (
  <div className='wrapper'>
    <div className='body'>
      {children}
    </div>
    
    {/* Styling */}
    <style jsx>{`
      .wrapper {
        box-shadow: 0 0 6px rgba(0,0,0,.1);
        border-radius: .5em;
      }
      .body {
        padding: 16px;
      }
    `}</style>
  </div>
)

export default Card