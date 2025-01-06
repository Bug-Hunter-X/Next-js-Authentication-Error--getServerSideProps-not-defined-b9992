```javascript
// pages/index.js
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
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user is not authenticated
  const user = getServerSideProps().user;
  if (!user) {
    return (
      <div>
        <h1>Please login to access this page</h1>
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

//getServerSideProps is defined in the context of the about page. It is not available in the index page.
function getServerSideProps(context){  
  //Simulate user object from the server
  return {props:{user: true}};
}
```