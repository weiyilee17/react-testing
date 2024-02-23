import { render, screen } from '../../utils/test-utils';
import Application from './application';

describe('Application', () => {
  it('Should render correctly', () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('Lee');
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsAndConditionsElement = screen.getByRole('checkbox');
    expect(termsAndConditionsElement).toBeInTheDocument();

    const termsAndConditionsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    );
    expect(termsAndConditionsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
    expect(submitButtonElement).toBeDisabled();
  });
});
