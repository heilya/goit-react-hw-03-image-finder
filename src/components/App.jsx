import { Component } from "react";
import {Searchbar} from "./searchbar/searchbar";
import {ImageGallery} from "./imageGallery/imagegallery";
// import {Loader} from "./loader/loader";
import {Button} from "./loadMore/button";
import {Modal} from "./modal/modal";
import axios from 'axios';



export class App extends Component{
  state = {
    query:'',
    images:[],
    page:1,
    // loading:false,
    // modalIsOpen:false

  };

 


  handleSubmitForm = (newQuery) =>{
    this.setState({query:`${Date.now()}/${newQuery}`,images:[],page:1});
  };


  componentDidUpdate(prevState) {
    const API_KEY = '38219577-d029f76c48d8fd975b70c05f3';
    const BASE_URL = 'https://pixabay.com/api/';
  
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const searchImages = async (query, page) => {
        const newQuery = query.split("/")[1];
        try {
          const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${newQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`);
          return response;
        } catch (error) {
          console.error("Error fetching images:", error);
          
        }
      };
      
      searchImages(this.state.query, this.state.page)
        .then((response) => {
         this.setState({images: response});
        })
        .catch((error) => {
          console.log("Error fetching images:", error);
        });
    }
  }

  
  
  
  
  
  


  handleLoadMore = () =>{
    this.setState(prevState => ({page: prevState.page + 1}));
  };


  render(){
    return(
      <div>
        <Searchbar onSumbit={this.handleSubmitForm}/>
        <ImageGallery/>
        {/* <Loader/> */}
        <Button onClick={this.handleLoadMore}/>
        <Modal/>
      </div>
    );
  };
};


