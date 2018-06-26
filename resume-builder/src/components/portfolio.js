import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio = this.props.data.projects.map(function(port){
        return <div className="columns portfolio-item" key={port.title}>
            <div className="item-wrap">

               <a href={port.url} title="">
                  <img alt="" src={port.image} />
                  <div className="overlay">
                     <div className="portfolio-item-meta">
                   <h5>{port.title}</h5>
                        <p>{port.category}</p>
                </div>
                  </div>
               </a>

            </div>
       </div>
      });
    }
    return (
    <div>
      <section id="portfolio">
         <div className="row">
            <div className="twelve columns collapsed">
               <h1>Check Out Some of My Works.</h1>
               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {portfolio}
               </div>
            </div>
         </div>
      </section>
    </div>
    );
  }
}

export default Portfolio;
