const active = (arr, index, className) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].classList.remove(className);
  }
  arr[index].classList.add(className);
};

export default active;
