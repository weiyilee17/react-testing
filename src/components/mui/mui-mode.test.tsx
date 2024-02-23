import { render, screen } from '../../utils/test-utils';
import MuiMode from './mui-mode';

describe('MuiMode', () => {
  it('Should render text correctly', () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
