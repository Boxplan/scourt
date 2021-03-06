import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Shibravyi Courtyard Wedding Venue Package</title>
            <meta name="description" content="rental for Courtyard and Pavilion" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Shibravyi Package</h1>
                    </header>
                    <p>Rs. 125000 | 8 Hour rental for Courtyard and Pavilion | Venue is extended for 8 hrs on an exclusive basis</p>
                    <p>Rs. 265000 | 24 hour rental for Courtyard and Pavilion | Venue is extended on an exclusive basis for 24 hours</p>
                    <p>Rs. 305000 | 24hr rental for Marquee tent, Courtyard and Pavilion | Venue is extended on an exclusive basis for 24 hours</p>

                </div>
            </section>
        </div>

    </div>
)

export default Generic