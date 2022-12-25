

function Card({children, reverse}) {
  return (
    // It means if reverse is correct so assign and display the class of reverse
    // so reverse is creation of conditional class
    // <div className= {`card ${reverse && 'reverse'}`}>{children}</div>

    // but in this line we're creating a conditional style
    <div className="card"
    style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
      color: reverse ? '#fff' : '#000',
    }}>
      {children}
    </div>
  )
}

export default Card
