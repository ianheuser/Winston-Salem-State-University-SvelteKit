# Project Setup
After cloning, install all depdendencies.

```sh
npm install
```

## Developing

This project is built with Svelte and Sveltekit. The global css and the image assets are found in the "static" folder. Beyond that, the project resides in the "src" folder. In SvelteKit, the page files are named +page.svelte. So, the page file in the top level of the routes folder, is the main landing page file. Inside the programs folder, you will find a folder for each program, and inside will be it's relative +page file.

In the /lib folder, you will find all of our interactive scripts and then a folder of components. In our case, I've created components for the Header and the footer, as well as the form section and every section on the program template so that changes take place on every program page if a section changes at all.

So if you need to add a new program page, you just add a folder named apptly inside of the programs folder and then add your +page file. So if you added this:  

/programs/my-new-program-page/+page.svelte

## Run development server

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
