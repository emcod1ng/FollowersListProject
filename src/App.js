// import React, { useState, useEffect } from 'react';
// import { useFetch } from './useFetch';
// import Follower from './Follower';
// function App() {
//   const { loading, data } = useFetch();
//   const [page, setPage] = useState(0);
//   const [followers, setFollowers] = useState([]);

//   useEffect(() => {
//     if (loading) return;
//     setFollowers(data[page]);
//   }, [loading, page]);

//   const nextPage = () => {
//     setPage(oldPage => {
//       let nextPage = oldPage + 1;
//       if (nextPage > data.length - 1) {
//         nextPage = 0;
//       }
//       return nextPage;
//     });
//   };
//   const prevPage = () => {
//     setPage(oldPage => {
//       let prevPage = oldPage - 1;
//       if (prevPage < 0) {
//         prevPage = data.length - 1;
//       }
//       return prevPage;
//     });
//   };

//   const handlePage = index => {
//     setPage(index);
//   };

//   return (
//     <main>
//       <div className='section-title'>
//         <h1>{loading ? 'loading...' : 'pagination'}</h1>
//         <div className='underline'></div>
//       </div>
//       <section className='followers'>
//         <div className='container'>
//           {followers.map(follower => {
//             return <Follower key={follower.id} {...follower} />;
//           })}
//         </div>
//         {!loading && (
//           <div className='btn-container'>
//             <button className='prev-btn' onClick={prevPage}>
//               prev
//             </button>
//             {data.map((item, index) => {
//               return (
//                 <button
//                   key={index}
//                   className={`page-btn ${index === page ? 'active-btn' : null}`}
//                   onClick={() => handlePage(index)}
//                 >
//                   {index + 1}
//                 </button>
//               );
//             })}
//             <button className='next-btn' onClick={nextPage}>
//               next
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

// export default App;
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdOutlineKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  const handlePage = index => {
    setPage(index);
  };
  const firstPage = () => {
    setPage(0);
  };
  const lastPage = () => {
    setPage(data.length - 1);
  };
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Followers List'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map(follower => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={firstPage}>
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <button className='prev-btn' onClick={prevPage}>
              <MdNavigateBefore />
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className='next-btn' onClick={nextPage}>
              <MdNavigateNext />
            </button>
            <button className='next-btn' onClick={lastPage}>
              <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
