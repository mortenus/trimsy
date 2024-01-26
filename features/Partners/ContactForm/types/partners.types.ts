type TUser = {
  username: string;
  email: string;
  description?: string;
  password: string;
  passwordRepeat: string;
};

type TAdditional = {
  socialMedia: string;
  companyName?: string;
  hearAbout: string;
  audienceTarget: string;
  details?: string;
};

interface TPartnersData extends TUser, TAdditional {}

export default TPartnersData;
