import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

const News = (props)=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  document.title=`NewsHunter- ${props.category}`

  useEffect(() => {
    const fetchData = async()=> {
      let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c1625a218ee4c36b33bb3d36d8a304b&page=1&pageSize=${props.pageSize}`;
      setLoading(true)
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      setArticles (parsedData.articles)
      setTotalResults (38)
      setLoading (false)
 
      return data
    }
    fetchData()
  }, []);


  // <<<<< IF WE USE CLASS BASED COMPONENT THEN DO SOMETHING BELOW LIKE THIS : >>>>>

  // const componentDidMount = async()=> {
  //   console.log("cdm");
  //   let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c1625a218ee4c36b33bb3d36d8a304b&page=1&pageSize=${props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json()
  //   console.log(parsedData);
  //   setArticles (parsedData.articles)
  //   setTotalResults (38)
  //   setLoading (false)
  // }



  const handlePrevClick = async ()=>{
    console.log("Previous");
    let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c1625a218ee4c36b33bb3d36d8a304b&page=${page - 1}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data= await fetch(url);
      let parsedData= await data.json()
      console.log(parsedData);
      setPage(page-1)
      setArticles(parsedData.articles)
      setLoading(false)
  }
  const handleNextClick= async ()=>{
    console.log("Next");
    if(page+1>Math.ceil(totalResults/props.pageSize)){
    }
    else{
      let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1c1625a218ee4c36b33bb3d36d8a304b&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        setPage(page+1)
        setArticles(parsedData.articles)
        setLoading(false)
      }   
  }
  return (
    <div className="container" style={{marginTop:'65px'}}>
      <h2 className="text-center">NewsHunter - Top Headline</h2>
      {loading && <Spinner/>}
      <div className="row my-4">
        {!loading && articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,60):""} source={element.source.name} description={element.description?element.description.slice(0,87):""} author={element.author} date={element.publishedAt} imageurl={element.urlToImage} newsurl={element.url}/>
        </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-success" onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-success" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}
News.PropsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
