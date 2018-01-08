/*
* @file: i18n.js
* @description: App i18n Localization
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
* */

'use strict';
let Strings = {
  common: {
    currencySign: '',
    ok: 'Ok',
    login: 'Log in',
    password: 'Password',
    forgot: 'Forgot your password?',
    createAccount: "Don't have an account? ",
    signup: 'Sign up',
    skip: 'Skip',
    networkError: 'Please check your internet connectivity or our server is not responding.'
  },
  walkthroughs: {
    walkthrough1: {
      header: 'Lorem Ipsum',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    walkthrough2: {
      header: 'Lorem Ipsum',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    walkthrough3: {
      header: 'Lorem Ipsum',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  },
  password: {
    change: 'Change Password',
    forgot: 'Forgot Password',
    reset: 'Reset Password',
    current: 'Current Password',
    newPass: 'New Password',
    confirm: 'Confirm Password',
    forgotInstructions: 'Enter your contact number below to receive OTP to reset your password.'
  },
  payments: {
    cardNumber: 'Card Number',
    cardHolder: 'Card Holder',
    expiry: 'Expiry',
    cvv: 'CVV',
    registerCard: 'Register Card'
  },
  validations: {
    emptyName: 'Enter your full name.',
    validName: 'Name must be 3 characters long and name field should contains only alphabets.',
    emptyMobile: 'Enter contact number.',
    validMobile: 'Enter valid contact number.',
    emptyPassword: 'Enter password.',
    validPassword: 'Enter valid password.',
    feedback: 'Share your feedback.',
    validOTP: 'Enter a valid OTP.',
    validPaymentCard: 'All fields are mandatory.',
    currentPassword: 'Enter current password.',
    newPasskey: 'Enter new password.',
    confirmPasskey: 'Enter confirm password.',
    passwordMatched: "Password & confirm password doesn't match.",
    validatePassword: 'Password should be 6-16 characters long and must be alphanumeric.',
    emptyEmail: 'Enter email address.',
    validEmail: 'Enter valid email address.',
    cannotBeLessThanZero: ' cannot be less than zero.',
    uploadImage: 'Please select image you want to upload.',
    uploadCancelled: 'Upload cancelled.',
    emptyFile: 'Cannot upload empty file.',
    unableToUpload: 'Unable to upload file.',
    tryAgain: 'Please try again.'
  }
};

module.exports = Strings;
