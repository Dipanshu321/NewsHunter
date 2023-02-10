import React from "react";

const NewsItem = (props)=> {
    let {title,description,imageurl,newsurl,date,author,source}= props;
    return (
      <div>
        <div className="card my-2">
            <span className="position-absolute top-0 translate-middle badge         rounded-pill bg-danger" style={{zIndex:'1',left:'87%'}}>{source}</span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ...
            </h5>
            <p className="card-text">
              {description} ...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      
    )
}
export default NewsItem
