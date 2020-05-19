let now = new Date();
const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

export const fetchImg = (longitude = '', latitude = '') => {
  return fetch(
    `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&&dim=0.1&date=${date}&api_key=GBSO66A1WRLKoyqcpHBUC9jefg7F1SguKe8wqmD0`,
  )
    .then(res => res.json())
    .then(data => {
      return data.url;
    });
};
