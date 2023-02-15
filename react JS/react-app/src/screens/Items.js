import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Items() {
  return (
    <div className="container">
    <h3 className='text-center' style={{ color: 'white', textShadow: '2px 2px #000' }}>Our storage</h3>
    <div className="row justify-content-center">
      <div className="col-auto">
        <button className="btn btn-primary">
          <Link to="/items/equipment" className="nav-link text-light">
            <i className="fas fa-gamepad me-2"></i>Gaming Equipment
          </Link>
        </button>
      </div>
      <div className="col-auto">
        <button className="btn btn-primary">
          <Link to="/items/monitor" className="nav-link text-light">
            <i className="fas fa-desktop me-2"></i>Monitors
          </Link>
        </button>
      </div>
      <div className="col-auto">
        <button className="btn btn-primary">
          <Link to="/items/hardware" className="nav-link text-light">
            <i className="fas fa-microchip me-2"></i>Hardware
          </Link>
        </button>
      </div>
    </div>
    <Outlet />
  </div>
  )
}