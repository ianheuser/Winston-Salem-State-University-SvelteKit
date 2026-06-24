# Project Setup
After cloning, install all depdendencies.

```sh
npm install
```

## Developing

This project is built with Svelte and Sveltekit. The global css and the image assets are found in the "static" folder. Beyond that, the project resides in the "src" folder. In SvelteKit, the page files are named +page.svelte. So, the page file in the top level of the routes folder, is the main landing page file. Inside the programs folder, you will find a folder for each program, and inside will be it's relative +page file.

In the /lib folder, you will find all of our interactive scripts and then a folder of components. In our case, I've created components for the Header and the footer, as well as the form section and every section on the program template so that changes take place on every program page if a section changes at all.

So if you need to add a new program page, you just add a folder named apptly inside of the programs folder and then add your +page file. So if you added this:  /programs/my-new-program-page/+page.svelte

Most edits to program pages will actually be in the individual components that make it up (found in /src/components), but if the edits are in the data, the edit would be made in the individual program page (/programs/program-name/+page.svelte) where the data is being set for any components on the page.

The submenu in the header (visible on mobile currently) is created off of that program array, so if you do add a program page, add an entry into the program[] in programs.js Below is an example of one of the page entries.

```sh
{
		fullName: 'Doctor of Nursing Practice',
        label: 'DNP',
        type: 'Doctorate',
        heading: 'Doctor',
        subheading: 'of Nursing Practice',
		href: '/programs/dnp'
	}
```

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
