import { TGreetProps } from './greet.types';

function Greet({ name }: TGreetProps) {
  return <div>Hello {name ? name : 'Guest'}</div>;
}

export default Greet;
