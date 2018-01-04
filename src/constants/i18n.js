/*
* @file: i18n.js
* @description: App i18n Localization
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
* */

'use strict';
let Strings = {
  common: {
    pound: '£',
    ok: 'Ok',
    login: 'Log in',
    contactNumber: 'Contact number',
    password: 'Password',
    forgot: 'Forgot your password?',
    createAccount: "Don't have an account? ",
    signup: 'Sign up',
    skip: 'Skip',
    conusmer: 'Customer',
    serviceProvider: 'Service Provider',
    alreadyAccount: 'Already have an account? ',
    signupTerms: 'When you sign up you automatically agree with our ',
    receiveOtp: 'You will receive an OTP on your Phone Number for verification!',
    name: 'Full name',
    save: 'Save',
    submit: 'Submit',
    proceed: 'Proceed',
    guest: 'Continue as guest',
    register: 'Register',
    next: 'Next',
    companyName: 'Company name',
    profileUnderReview: 'Your profile is under review.',
    getBackIn24Hour: 'Get back in 24 hours.',
    confirm: 'Confirm Password',
    addLogoandBannerName: 'Add Logo and Brand Name',
    myCompany: 'My Company'
  },
  walkthroughs: {
    walkthrough1: {
      header: 'Want Home Service?',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    walkthrough2: {
      header: 'Search Service Providers',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    walkthrough3: {
      header: 'Get Your Car Serviced',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  },
  consumer: {
    mobileValetService: 'Mobile Valet Service',
    carRecoveryService: 'Car Recovery Service'
  },
  subscription: {
    BecomeaManager: 'Become a Manager',
    BecomeaManagerfor: 'Become a Manager for £',
    couponApplied: 'Coupon successfully Applied',
    subscription: 'Subscription',
    applyCoupon: 'Apply coupon',
    enterCoupon: 'Type',
    totalPayableAmount: 'Total payable amount',
    buySubscriptionFor: 'Buy subscription for ',
    perMonth: '/Month',
    myCurrentSubscribedPlan: 'My Current Subscribed Plan',
    manageSubscription: 'Manage Subscription',
    nextPaymentDueOn: 'Next Payment Due on',
    enterCouponCode: 'Enter coupon code.',
    enterValidCouponCode: 'Enter valid coupon code.',
    savedCards: 'Saved Card',
    cardNumber: 'Card Number',
    cardHolder: 'Card Holder',
    expiry: 'Expiry',
    cvv: 'CVV',
    registerCard: 'Subscription',
    remove: 'Remove',
    add: 'Add Credit or Debit Card',
    endSubscription: 'End Subscription',
    resultIntoEndOfSubscription: 'This will result into the end of subscription services.',
    youAreNotSubscribed: 'You are not subscribed',
    subscribeToServiceRequest: 'Subscribe to service request',
    downgradePlan: 'Downgrade plan',
    onAgreeAccountWillBecomeIndividual: 'If you agree the account will become individual account.',
    congratulations: 'Congratulations',
    upgradedPlanToManager: 'You have upgraded your plan to Manager.',
    loginAt: 'Login at ',
    toCreateYourAccount: ' to create your account.',
    downgradeToIndividualPlan: 'Downgrade To Individual Plan',
    removeTeamMemberAcoountPermanently: 'This will remove all your team member account permanently'
  },
  profile: {
    fullName: 'Full name',
    emailAddress: 'Email address',
    address: 'Address',
    enterPhoneNumber: 'Enter contact number',
    otpSentTo: 'OTP sent to',
    enterEmailAddress: 'Enter email address.',
    residentialAddressLine1: 'Residential Address Line 1',
    enterAddress: 'Select your address here.',
    city: 'City',
    enterCity: 'Enter your city here.',
    postalCode: 'Postal Code',
    enterPostalCode: 'Enter postal code here.',
    enterValidCode: 'Enter valid postal code.',
    enterValidEmailAddress: 'Enter valid email address.',
    companyName: 'Company name',
    agencyName: 'Agency name',
    houseNumber: 'Company House No.',
    motCerts: 'Upload MOT Certificate',
    logbook: 'Upload Copy of Logbook',
    insurance: 'Upload Copy of Insurance',
    billingAddress: 'Utility Bill of Billing Address',
    uploadImage: 'Upload Image',
    selectService: 'Select Service',
    noLongerUnderManager: 'You are no longer under any manager',
    completeProfileToWorkAsServiceProvider: 'Complete your profile to work as a service provider',
    onAgreeEmailUpdate: 'Enter your current password to update email address.',
    updateEmail: 'Update Email',
    password: 'Password'
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
  menu: {
    profile: 'My Profile',
    requests: 'My Requests',
    subscription: 'Subscription',
    settings: 'Settings',
    logout: 'Logout',
    active: 'Active',
    beAManage: 'Become a Manager',
    duties: 'My Duties',
    team: 'My Team'
  },
  about: {
    terms: 'Terms of service',
    privacy: 'Privacy Policy'
  },
  otp: {},
  dashboard: {
    request: 'Request Service Here'
  },
  settings: {
    changePassword: 'Change Password',
    notification: 'Push Notifications',
    terms: 'Terms of service',
    termsLink: 'terms-conditions',
    privacy: 'Privacy Policy',
    privacyLink: 'privacy-policy',
    feedback: 'Submit Feedback',
    radius: 'Search Radius',
    deleteAccount: 'Delete Account',
    logout: 'Logout',
    sosReq: 'Receive SOS Request',
    onAgreeAccountDeletedPermanently: 'If you agree the account will be deleted permanently.',
    schedule: 'Schedule',
    scheduleYourAutoOnlineWorkingHour: 'Schedule your auto online working hours ',
    startWorking: 'Start Working',
    finishWorking: 'Finish Working',
    myWorkingDays: 'My Working Days'
  },
  payments: {
    cardNumber: 'Card Number',
    cardHolder: 'Card Holder',
    expiry: 'Expiry',
    cvv: 'CVV',
    registerCard: 'Subscription'
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
    enterAgencyName: 'Enter your agency name.',
    enterVehicleRegNo: "Enter vehicle's registration number.",
    enterValidVehicleRegNo: "Enter valid vehicle's registration number.",
    enterVehicleMake: "Enter vehicle's make.",
    enterValidVehicleMake: "Enter valid vehicle's make.",
    enterVehicleModel: 'Enter vehicle model.',
    enterValidVehicleModel: 'Enter valid vehicle model.',
    enterVehicleColor: 'Enter vehicle color.',
    enterValidVehicleColor: 'Enter valid vehicle color.',
    enterEngine: 'Enter engine.',
    enterValidEngine: 'Enter valid engine.',
    enterFuel: 'Enter fuel.',
    enterValidFuel: 'Enter valid fuel.',
    enterGearbox: 'Enter gearbox.',
    enterValidGearbox: 'Enter valid gearbox.',
    enterDescriptionOfProblem: 'Enter description of your problem.',
    enterCompany: 'Enter company house number.',
    enterValidCompany: 'Enter valid company house number.',
    uploadLogbook: 'Upload logbook.',
    uploadInsurance: 'Upload insurance.',
    uploadMOT: 'Upload MOT certificates.',
    uploadBillingAddress: 'Upload utility bill of billing address.',
    selectServiceType: 'Select service type.',
    enableLocationServices: 'Enable location services.',
    modalYear: "Modal can't be future year.",
    emptyRating: 'Please give the rating',
    emptyComment: 'Please enter the comment',
    emptyCost: 'Enter the quote amount.',
    validPrice: 'Enter the valid quote amount.',
    enterBody: 'Please enter body type.',
    enterValidBody: 'Please enter valid body type.',
    enterValidCost: 'Please enter valid cost.',

    //Image and PDF upload
    sizeOfFile: 'Size of file cannot exceed 5MB.',
    uploadCancelled: 'Upload cancelled.',
    emptyFile: 'Cannot upload empty file.',
    unableToUpload: 'Unable to upload file.',
    tryAgain: 'Please try again.'
  },
  request: {
    costOfTheService: 'Cost of the service',
    rateYourExperienceWithSpaceOwner: 'Rate your experience with Service Provider.'
  },
  vehicle: {
    selectFromAddedVehicle: 'Select From Added Vehicle',
    vehicleRegistrationNo: 'Vehicle Registration No.',
    vehicleMake: 'Vehicle Make',
    vehicleModel: 'Vehicle Model',
    vehicleColor: 'Vehicle Color',
    engine: 'Engine',
    fuel: 'Fuel',
    gearbox: 'Gearbox',
    describeYourProblem: 'Describe your problem',
    regNo: 'Reg No.',
    color: 'Color',
    make: 'Make',
    modal: 'Model',
    body_type: 'Body Type'
  },
  services: {
    recovery: 'Car Recovery Service',
    vallet: 'Mobile Valet Service',
    selectService: 'Select Service',
    reasonToReport: 'Reason to report',
    reportingWillCancelOngoingService: 'Reporting will cancel your current ongoing service',
    reasonDescriptionReport: 'Reporting will cancel your current ongoing service'
  },
  notification: {
    newoffer: 'New Offer',
    serviceComplete: 'Your Service Has Been Completed',
    acceptSosService: 'Has Accepted SoS Service'
  }
};

module.exports = Strings;
