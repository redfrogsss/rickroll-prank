\* I am currently working on creating more pages so that the website will be more interesting.

# Rick Roll Prank 
Yet another simple website to rickroll your friends.

I made this little project to make some fun and kill spare time. I hope you enjoy it.

## How it works?
This website rickroll your friends with three simple steps:
1. Ask your frineds to click on the link.
2. Your friends will see a randomly selected, fascinating, meticulously designed website page.
3. Your friend gets rickrolled when they click any links/buttons on the website or idle for 1 minutes.

## How to setup?
Start a `dev` server in localhost:

```bash
# Clone the repo
git clone https://github.com/redfrogsss/rickroll-prank

# Install dependencies
cd rickroll-prank
yarn

# Start dev server
yarn dev
```

or deploy this website to any static site hosting service like [Cloudflare Pages](https://pages.cloudflare.com/).

## How to create a new page?
1. Create a new file in `pages` folder.
2. Add the page to the array `pages` in `App.tsx`.
3. Design your page with the following requirements:

    - The page should be responsive.
    - The page should be redirect to a random rickroll links after users click any links/buttons.
    - The page should be redirect to a random rickroll links after 1 minute of idle.


## Learn More

This project uses the following tech:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript.
- [Vite](https://vitejs.dev/) - Next generation frontend tooling. It's fast!
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Cloudflare Pages](https://pages.cloudflare.com/) - A static site hosting service.