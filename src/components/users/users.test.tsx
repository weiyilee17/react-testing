import { http, HttpResponse } from 'msw';

import { server } from '../../mocks/server';
import { render, screen } from '../../utils/test-utils';
import Users from './users';

describe('Users', () => {
  it('Should correctly render', () => {
    render(<Users />);

    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  it('Should render a list of users', async () => {
    render(<Users />);

    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  it('Should render error', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json({}, { status: 500 });
      }),
    );

    render(<Users />);

    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});
