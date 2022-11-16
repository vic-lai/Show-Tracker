import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Bob')
    
    const handleClick = (name) => {
        setName(name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick = {() => handleClick('Victor')}>Click me</button>
        </div>
     );
}
 
export default Home;