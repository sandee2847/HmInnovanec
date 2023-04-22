import Spinner from 'react-bootstrap/Spinner';

function SpinnerExample() {
  return (
    <div style={{"height":"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
}

export default SpinnerExample;