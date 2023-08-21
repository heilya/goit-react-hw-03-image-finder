import { Component } from "react";
import {Searchbar} from "./searchbar/searchbar";
import {ImageGallery} from "./imageGallery/imagegallery";
import {Loader} from "./loader/loader";
import {Button} from "./loadMore/button";
import {Modal} from "./modal/modal";



export class App extends Component{
  state = {
    query:'',
    images:[],

  };


  render(){
    return(
      <div>
        <Searchbar/>
        <ImageGallery/>
        <Loader/>
        <Button/>
        <Modal/>
      </div>
    );
  };
};


