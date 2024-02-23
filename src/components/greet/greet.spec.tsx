import Greet from './greet';
import { render, screen } from '../../utils/test-utils';

describe('First test', () => {
  it('Greet renders Hello', () => {
    render(<Greet />);
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});
