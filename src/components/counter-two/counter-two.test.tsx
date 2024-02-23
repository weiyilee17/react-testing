import { render, screen, userEvent } from '../../utils/test-utils';
import CounterTwo from './counter-two';

import { vi } from 'vitest';

describe('CounterTwo', () => {
  it('Should correctly render', () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  it('Should call handler', async () => {
    userEvent.setup();
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
