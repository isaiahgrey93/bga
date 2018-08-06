const initial = {};

export default (data) => {
  if (!data) {
    return initial;
  }

  return {
    id: data.donor_id,
    type: data.type,
    name: data.name,
    email: data.email,
  };
};
