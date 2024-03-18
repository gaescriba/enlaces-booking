//route error import
import { useRouteError } from 'react-router-dom';

export default function Error(){

  const error = useRouteError();
  console.error(error);
  
  return(
    <>
      <div>Hello, 404!</div>
    </>
  );
}
