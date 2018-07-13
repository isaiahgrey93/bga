const initial = {
  images: {},
  officer: {},
  amounts: [],
};

export default (data) => {
  if (!data) {
    return initial;
  }

  return {
    id: data.donee_id,
    type: data.donee_type,
    name: data.business_name,
    images: {
      logo: data.img_logo,
      photo: data.img_photo,
      avatar: data.img_avatar,
    },
    officer: {
      name: data.officer_name,
      title: data.officer_title,
    },
    amounts: data.custom_amounts,
  };
};
