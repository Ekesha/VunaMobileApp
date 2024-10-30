export type MainStackParamList = {
  Login: undefined;
  Signup: undefined;
  SignupSuccess: undefined;
  Dashboard: {
    userData: any;
  };
  Portfolio: undefined;
  Investments: {
    userData: any;
  };
  Products: undefined;
  Profile: undefined;
  Contribution: {
    provider: string;
    productType: string;
    minAmount: number;
    maxAmount: number;
  };
  ContributionSuccess: undefined;
  Withdraw: undefined;
  WithdrawSuccess: undefined;
  Loans: {
    userData: any;
  };
};
