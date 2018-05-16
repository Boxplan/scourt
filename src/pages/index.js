import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import ScriptHolder from '../components/ScriptHolder'

class HomeIndex extends React.Component {

    constructor(props) {
            super(props);
            this.state ={};
            this.hideDom = this.hideDom.bind(this)
        }



    hideDom(){
      //  document.getElementById("one").style.display ="none";
    }


    render() {
       // const siteTitle = this.props.data.site.siteMetadata.title;
       // const siteDescription = this.props.data.site.siteMetadata.description;
      //  const wWidth = window.innerWidth;
      //  const wHeight = window.innerHeight;

        return (
            <div>
                <Helmet>
                    <title>Shibravyi Courtyard Wedding Venue</title>
                    <meta name="description" content='Traditional Outdoor Wedding Venue, Lawn and Banquet Hall off Kanakapura Road, South Bangalore ' />
                </Helmet>

                <div id="main" >
                    <section className="tiles">
                        <article>
                            <header className="major">
                                <h3>Shibravyi Courtyard Wedding Venue</h3>
                                <p>Shibravyi, A courtyard home, with sprawling gardens, terracotta tiled pavilions and more. A perfect setting for outdoor and indoor events.</p>

                            </header>
                            <Link to="/venues" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-12.jpg)`}}>
                            <header className="major">
                                <h3>Packages</h3>
                                <p>4 Hour Rental Available</p>
                                <p>8 Hour Rental Available</p>
                                <p>24 Hour Rental Available</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-11.jpg)`}}>
                            <header className="major">
                                <h3>Capacity Info</h3>
                                <p>Courtyard 100-200 Guests</p>
                                <p>Courtyard and Pavilion 100-300 Guests</p>
                                <p>Courtyard Pavilion with Outdoor Lawn 300-1500 Guests</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Banquet-Hall-at-Shibravyi-Courtyard-13.jpg`}}>
                            <header className="major">
                                <h3>Gallery</h3>
                                <p>Images, Virtual Tour</p>
                            </header>
                            <Link to="/recent-events" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Recent Events</h3>
                                <p>Weddings, Family Events, Parties</p>
                            </header>
                            <Link to="/packages" className="link primary"></Link>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`


//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Balan-Farm-Green-Convention-Hall-balan-farm3-1.jpg)`}}>
// <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Horizon-Horizon_Octave_JP_Nagar_3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>