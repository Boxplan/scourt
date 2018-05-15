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
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;
      //  const wWidth = window.innerWidth;
      //  const wHeight = window.innerHeight;

        return (
            <div>
                <Helmet>
                    {/*<title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />*/}
                    <title>Banquet Hall</title>
                    <meta name="description" content='A multi property Banquet chain with halls, Wedding Venues.' />

                </Helmet>

                <div id="main" >
                    <section className="tiles">
                        <article>
                            <header className="major">
                                <h3>Venues</h3>
                                <p>4 Banquet halls. Between 100 - 300 Guests</p>
                            </header>
                            <Link to="/venues" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://www.whatsuplife.in/noida/blog/wp-content/uploads/2016/11/Banquet-Hall.jpg)`}}>
                            <header className="major">
                                <h3>Packages</h3>
                                <p>From Rs.600 per head onwards</p>
                            </header>
                            <Link to="/images" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage:`url(https://www.theleela.com/contentAsset/image/0ffc040b-4db7-4f80-b38e-3f8efc708540/fileAsset/h/300)`}}>
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