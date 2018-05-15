import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Nandhana</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nandhana-bangalore">Bangalore</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nandhana-chennai">Chennai</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nandhana-new-delhi">New Delhi</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nandhana-mumbai">Mumbai</Link></li>
            </ul>
            {/*<ul className="actions vertical">
                <li><a href="http://palmshorebanquets.com" target="_blank" className="button special fit">Live Demo</a></li>
            </ul>*/}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
