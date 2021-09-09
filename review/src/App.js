import React, {useState} from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setState={setPerson}/>
    </div>);
};

export default App;


const SubComp1 = (props)=> {
    const { person, setPerson } = props;
    
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <p>{person.name.title}</p>
        <p>{person.name.first}</p>
        <p>{person.name.last}</p>

        <SubComp2 person={person} setState={setState}/>
    </div>);
}

const SubComp2 = (props)=> {
    const { person } = props;

    const handleClick =()=> {
        
    }

    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 person={person}/>
    </div>);
}

const SubComp3 = (props)=> {
    const { person } = props;

    return(<div className="component">
        <p>
        {person.location.street} {person.location.city}, {person.location.state}
        </p>
        <h1>Sub Comp 3</h1>
    </div>);
}
