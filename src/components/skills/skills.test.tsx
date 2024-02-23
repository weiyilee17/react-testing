import { logRoles, render, screen } from '../../utils/test-utils';
import Skills from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  it('Should render correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('Should render a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  it('Should render login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  it('Should not render start learning button at beginning', () => {
    render(<Skills skills={skills} />);
    // getByRole would fail and throw exception, so should use queryByRole
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it('Should render start learning button after 500ms', async () => {
    const { container } = render(<Skills skills={skills} />);

    logRoles(container);

    // printing the dom
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      },
    );

    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
