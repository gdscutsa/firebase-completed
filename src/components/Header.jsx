import { logout, signInWithGoogle } from '../firebase';
import { Link } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export function Header() {
  const [user] = useAuthState(auth);

  return (
    <header className="flex flex-row justify-between items-center pb-4">
      {/* <Link to="/" className="text-3xl font-bold">
        Movies
      </Link> */}
      <Link className="flex flex-row items-center space-x-2" to="/">
        <span
          className="h-5 w-5 rounded-full 
  bg-blue-400"
        ></span>
        <p className="text-lg font-semibold text-black">Movie Reviews</p>
      </Link>
      <div className="flex flex-row items-center space-x-5">
        {!user ? (
          <button
            className="font-bold text-white px-2 py-2 bg-slate-900 hover:bg-slate-800"
            onClick={signInWithGoogle}
          >
            Log in
          </button>
        ) : (
          <>
            <h2 className="font-medium text-lg">Hi, {user.displayName}</h2>
            <button
              className="font-bold text-white px-2 py-2 bg-slate-900 hover:bg-slate-800"
              onClick={logout}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </header>
  );
}
