import Greet from './greet';
import { render, screen } from '../../utils/test-utils';

describe('First test', () => {
  it('Greet renders Hello', () => {
    render(<Greet />);
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
  it('Greet renders Hello name when name is provided', () => {
    render(<Greet name="Lee" />);
    expect(screen.getByText('Hello Lee')).toBeInTheDocument();
  });
});
