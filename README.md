# Code Changes Risk Reminder - README

This project aims to provide a reminder to users about the potential risks involved when merging code changes. It utilizes a popup that prompts the user to accept the terms and conditions by checking specific checkboxes before allowing them to proceed with the merge process.

## Features

- Login form with email and password inputs.
- Terms and conditions popup with checkboxes for dummy placeholder values "Cook the food", "Pack the food" and "Deliver the food."
- Prevents users from logging in until all checkboxes are checked.
- Integration with the SweetAlert2 library for displaying the popup.

## Installation

1. Clone the repository: `git clone https://github.com/IshanAryendu/ConditionalLogin.git`
2. Open the `index.html` file in your web browser.

## Usage

1. Enter your email address and password in the corresponding input fields.
2. Click the "Login" button.
3. A terms and conditions popup will appear.
4. Check all the checkboxes.
5. Click the "Accept" button to proceed with the login process.

## Advantages

- **Risk Awareness**: By incorporating a terms and conditions popup, this approach reminds users about potential risks associated with code changes before allowing them to log in. This can help mitigate the chances of accidental merges or incomplete understanding of the changes made.

- **User Confirmation**: Requiring users to explicitly accept the terms and conditions by checking the checkboxes ensures that they are actively acknowledging and agreeing to the risks involved. It promotes a sense of responsibility and accountability.

- **Improved Security**: By enforcing the acceptance of terms and conditions, this approach adds an extra layer of security to the login process. Users who don't check all the checkboxes are prevented from logging in, reducing the potential for unauthorized access.

- **Customizable and Extendable**: The code can be easily customized to include additional terms and conditions or modify the existing ones. It provides a flexible foundation that can be expanded to meet specific project requirements.

## License

This project is licensed under the [GNU Public License](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Acknowledgements

- [SweetAlert2](https://sweetalert2.github.io/) - A beautiful, responsive, customizable, and accessible popup library.

## Contributions

Contributions to this project are welcome! If you have any suggestions, enhancements, or bug fixes, please submit a pull request.
