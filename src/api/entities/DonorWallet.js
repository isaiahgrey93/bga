const initial = [];

export default (data = []) => {
  if (!data) {
    return initial;
  }

  return data.map(({ account }) => item(account));
};

const item = (data = {}) => ({
  id: data.account_id,
  number: data.account_number,
  type: data.account_type,
  preferred: data.preferred_account,
});
