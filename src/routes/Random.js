import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../utils/NavbarWL'
import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';

function Random() {
  return (
      <div className="randomDiv">
          <NavBar/>
          <h1>Random</h1>
          <LoadingButton />
          </div>
  
  );
}
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Random Manga'}
      </Button>
    );
  }
  
export default Random;
