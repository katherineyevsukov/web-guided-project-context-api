import React from 'react';


const App = ()=> {
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1/>
    </div>);
};

export default App;


const SubComp1 = ()=> {
    return(<div className="component">
        <h1>Sub Comp 1</h1>
    </div>);
}
