import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className="card" style={{width: '18rem', marginBottom: '50px'}}>
        {props.img && <img src={props.img} className="card-img-top" alt="аватар" />}
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {props.children}
            <a href={props.link} className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

Card.propTypes = {}

export default Card
