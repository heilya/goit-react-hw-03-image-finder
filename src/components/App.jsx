import { Component } from "react";
import {Searchbar} from "./searchbar/searchbar";
import {ImageGallery} from "./imageGallery/imagegallery";
import {Loader} from "./loader/loader";
import {Button} from "./loadMore/button";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



export class App extends Component{
  state = {
    query:'',
    images:[],
    page:1,
    loading:false,
   };

 


  handleSubmitForm = (newQuery) =>{
    this.setState({query:`${Date.now()}/${newQuery}`,images:[],page:1});
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '38219577-d029f76c48d8fd975b70c05f3';
    const BASE_URL = 'https://pixabay.com/api/';
    
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ loading: true }); 
      const searchImages = async (query, page) => {
        const newQuery = query.split("/")[1];
        try {
          const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${newQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`);
          return response.data.hits;
        } catch (error) {
          console.error("Error fetching images:", error);
          throw error;
        }
      };
      
      searchImages(this.state.query, this.state.page)
        .then((newImages) => {
          if (newImages.length === 0) {
            toast.error('Nothing found, try something else');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
            loading: false,
          }));
        })
        .catch((error) => {
          console.log("Error fetching images:", error);
          toast.error("Oops! Our image server is currently unavailable. Please try again later.")
        });
    }
  }

  

  handleLoadMore = () =>{
    this.setState(prevState => ({page: prevState.page + 1}));
  };


  render(){
    const { images,loading } = this.state;
    return(
      <div>
        <Searchbar onSumbit={this.handleSubmitForm}/>
        {loading?(<Loader/>):(<ImageGallery images={this.state.images}/>)}
        {images.length !== 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <Toaster />
      </div>
    );
  };
};


