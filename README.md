# lerna-react-node
Repo for creating a react-node app using lerna

Know more about lerna <a>https://lerna.js.org/</a>

#### Steps to run

Install lerna globally if not present

<code>npm i lerna -g</code>

clean the node-modules if there are any

<code>npx lerna clean</code>

install node-modules at root-level

<code>npx lerna bootstrap --hoist</code>

simply run both server and client 

<code>npm run start</code>

You should be able to see your working react app on 3000 and node server on 5000
