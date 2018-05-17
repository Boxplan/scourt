import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import pic20 from '../assets/images/pic20.jpg'
import pic21 from '../assets/images/pic21.jpg'
import pic22 from '../assets/images/pic22.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Courtyard</title>
            <meta name="description" content="Nandhana Chennai" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Courtyard and Pavilion</h1>
                    </header>
                    <p>Shibravyi is a courtyard home, with sprawling gardens, terracotta tiled pavilions and more. A perfect setting for outdoor &amp; indoor events.  Shibravyi hosts a number of social functions such as weddings, birthdays, naming ceremonies and other social events. Shibravyi has a hall capacity of 800 and more than 1000 floating guests and Dinning Capacity 250 guests at once. The ambience of the location pleases everyone with its lush green environment.  The pleasant surrounding is best suited for all marriages and other family occasions.  Shibravyi  is best suitable for your wedding.</p>
                    <span className="image main"><img src={pic20} alt="" /></span>




                </div>
                <div className="inner">
                    <header className="marquee">
                        <h1>Marquee Tent</h1>
                    </header>
                    <p>Shibravyi is a courtyard home, with sprawling gardens, terracotta tiled pavilions and more. A perfect setting for outdoor &amp; indoor events.  Shibravyi hosts a number of social functions such as weddings, birthdays, naming ceremonies and other social events. Shibravyi has a hall capacity of 800 and more than 1000 floating guests and Dinning Capacity 250 guests at once. The ambience of the location pleases everyone with its lush green environment.  The pleasant surrounding is best suited for all marriages and other family occasions.  Shibravyi  is best suitable for your wedding.</p>
                    <span className="image main"><img src={pic21} alt="" /></span>
                    <span className="image main"><img src={pic22} alt="" /></span>

                </div>
            </section>
        </div>

    </div>
)

export default Generic