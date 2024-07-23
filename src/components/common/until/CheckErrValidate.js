export const CheckErrValidate = (listError, title, imageOne, imageTwo, err) => {
  let obj = {};
  // validate
  if (title === '' || !title) {
    obj = {
      ...obj,
      title: 'Title must be required !',
    };
    // stop function
  } else if (title.trim().length > 0) {
    obj = {
      ...obj, // rest === clone lai value tu obj cu const a = {one: 1} b = {...a, two: 2} ===>  b = { one: 1, two: 2}
      title: null,
    };
  }
  if (imageOne === '' || !imageOne) {
    obj = {
      ...obj,
      imageOneRef: 'ImageOne must be required !',
    };
    // stop function
  } else if (imageOne.trim().length > 0) {
    obj = {
      ...obj,
      imageOneRef: null,
    };
  }
  if (imageTwo === '' || !imageTwo) {
    obj = {
      ...obj,
      imageTwoRef: 'ImageTwo must be required !',
    };
    // stop function
  } else if (imageTwo.trim().length > 0) {
    obj = {
      ...obj,
      imageTwoRef: null,
    };
  }

  let flag = false;
  listError(obj); // khi muon trinh duyet render lai => set State thi react  moi render content page again
  for (let item in obj) {
    if (obj[item] !== null) {
      flag = true;
      return flag;
    }
  }
  return flag;
};
