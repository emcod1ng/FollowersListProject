// const paginate = followers => {
//   const itemsPerPage = 20;
//   const numberOfPages = Math.ceil(followers.length / itemsPerPage);

import Follower from './Follower';

//   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//     const start = index * itemsPerPage;
//     return followers.slice(start, start + itemsPerPage);
//   });

//   return newFollowers;
// };

// export default paginate;
import Followers from './Follower';

const paginate = followers => {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};
export default paginate;
