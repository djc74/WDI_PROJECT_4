// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
//
// import HomeButton from '../utilities/HomeButton';
//
// class UserIndex extends React.Component {
//   state = {
//     uplifts: []
//   }
//
//   componentDidMount() {
//     Axios
//       .get('/api/uplifts')
//       .then(res => this.setState({ uplifts: res.data}))
//       .catch(err => console.log(err));
//   }
//
//
//   render() {
//     return (
//       <div>
//         <h1>User Uplift Index</h1>
//         <HomeButton />
//         <button>
//           <Link to={'/uplifts/new'}>Add Uplift</Link>
//         </button>
//         {this.state.uplifts.map(uplift =>
//           <div key={uplift.id}>
//             <Link to={`/uplifts/${uplift.id}`}>
//               <img src={uplift.body} />
//             </Link>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//
// export default UserIndex;
