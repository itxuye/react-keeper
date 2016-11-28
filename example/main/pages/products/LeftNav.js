import React from 'react'
import { Link, Control } from 'react-control'

export default class LeftNav extends React.Component {

  render() {

    return (
      <div className="col-md-2">
        <ul className="nav nav-pills nav-stacked">
          <li className={ Control.path === '/products/ep'? 'active' : '' }>
            <Link href="/products/ep">Enterprise Website</Link>
          </li>
          <li className={ Control.path === '/products/mo' || Control.path === '/products'? 'active' : '' }>
            <Link href="/products/mo">Mobile Website</Link>
          </li>
          <li className={ Control.path === '/products/item/first'? 'active' : '' }>
            <Link href="/products/item/first">Detail First</Link>
          </li>
          <li className={ Control.path === '/products/item/second'? 'active' : '' }>
            <Link href="/products/item/second">Detail Second</Link>
          </li>
        </ul>
      </div>
    )
  }
}

LeftNav.propTypes = {
  item: React.PropTypes.any
}