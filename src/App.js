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
    // A - Callback function gets introduced
    const  handleSearch = event => {
        //it call back
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>{getTitle("React")}</h1>
            <Search onSearch={handleSearch} />
            <hr />
            <List list={stories} />
        </div>
    );
}

const Search = (props) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = event =>{
        setSearchTerm(event.target.value);
        //B - The callback is used elsewhere
        props.onSearch(event);
    }

    return(
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
            <p>
                Searching for <strong>{searchTerm}</strong>
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
