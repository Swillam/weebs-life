import { Button } from 'react-bootstrap';
  
  function LoadingButton(props) {
  
    return (
      <Button
        variant="primary"
        disabled={props.isLoading}
        onClick={!props.isLoading ? props.onClick : null}
      >
        {props.isLoading ? 'Loading…' : 'Random Manga'}
      </Button>
    );
  }

export default LoadingButton