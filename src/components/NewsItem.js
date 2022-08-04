import React from 'react'
import './NewsItem.css'

const NewsItem =(props)=> {
    let { title, description, ImageUrl, NewsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }
          }>
        <span className="badge rounded-pill bg-danger"> {source}</span>
        </div>
          <img src={!ImageUrl ? "https://www.investors.com/wp-content/uploads/2020/09/Stock-shopify-05-shutt.jpg" : ImageUrl} className="card-img-top card_img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>

      </div>
    )
}
export default NewsItem
