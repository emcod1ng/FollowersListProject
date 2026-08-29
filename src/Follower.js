// import React from 'react'

// const Follower = ({ avatar_url, html_url, login }) => {
//   return (
//     <article className='card'>
//       <img src={avatar_url} alt={login} />
//       <h4>${login}</h4>
//       <a href={html_url} className='btn'>
//         view profile
//       </a>
//     </article>
//   )
// }

// export default Follower

import React from 'react';

const Follower = ({ avatar_url, html_url, login, id }) => {
  return (
    <article className='card'>
      <p>{id}</p>
      <img src={avatar_url} alt={login} />
      <h4>@{login}</h4>
      <a href={html_url} className='btn' target='_blank'>
        view profile
      </a>
    </article>
  );
};

export default Follower;
