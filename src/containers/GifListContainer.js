import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {
    state = {
        gifs: []
      }
    render() { 
        return <div>
            <GifList gifs={this.state.gifs} />
            <GifSearch getFetch={this.getFetch} handleSubmit={this.handleSubmit}/>
        </div>
        ;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.getFetch(event.target.name.value)

    }

    getFetch = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({url: gif.images.original.url }))})
          })
          
        }
    
    componentDidMount() {
        this.getFetch()
    }


}
 
export default GifListContainer;