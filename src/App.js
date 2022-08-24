import logo from './logo.svg';
import React from "react";
function getTitle(title) {
  return title;
}



const App = ()=> {

    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
        {
            title: 'Angular',
            url: 'https://angular.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];
    const [searchTerm, setSearchTerm] = React.useState('React');
    // A - Callback function gets introduced
    const  handleSearch = event => {
        //it call back
        setSearchTerm(event.target.value);
    }
    const searchedStories = stories.filter( (story) =>
        (story.title.toLowerCase().includes(searchTerm.toLowerCase()) )
    );

    return (
        <div>
            <h1>{getTitle("React")}</h1>
            <Search onSearch={handleSearch} searchTerm={searchTerm} />
            <hr />
            <List list={searchedStories} />
        </div>
    );
}


const Search = (props) => {

    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={props.searchTerm} onChange={props.onSearch}/>
            <p>
                Searching for <strong>{props.searchTerm}</strong>
            </p>
        </div>
    )
}
const List =  props =>
    props.list.map((item) =>
     (
        <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
    )
  );
export default App;
