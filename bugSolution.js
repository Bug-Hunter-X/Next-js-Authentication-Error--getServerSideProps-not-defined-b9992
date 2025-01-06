```javascript
// pages/about.js
import {getServerSideProps} from '../utils/auth'

export default function About({user}) {
  if (!user) {
    return (
      <div>
        <h1>Please login to access this page</h1>
        <Link href='/'>
          <a>Go to Home Page</a>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch user data from the server
  const user = await fetchUserData(context);

  return {
    props: {
      user: user,
    },
  };
}

async function fetchUserData(context) {
  // Replace this with your actual authentication logic
  // Here is an example of an API call
  const res = await fetch('https://api.example.com/user');
  const data = await res.json();

  if (res.ok) {
    return data; // Return user data if authentication is successful
  } else {
    return null; // Return null if authentication fails
  }
}
```
```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```