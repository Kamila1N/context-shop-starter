import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const User = () => {
	const { user, logIn, logOut, changeCurrency} = useContext(UserContext);

	return (
		<div style={{border: '5px solid orange', margin: '1em', padding: '1em'}}>
			<h3>User</h3>

			{user.isLogIn && (
				<>
				<h4>jmeno: {user.name}</h4>
				<p>currency: {user.currency}</p>
			</>
			)
			}

			{user.isLogIn
				? <button onClick={logOut}>Log Out</button>
				: <button onClick={logIn}>Log In</button>
			}

		</div>
	);
}

export default User;