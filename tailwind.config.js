/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      backgroundColor: theme =>({
				...theme('colors'), // colores por defecto de tailwind
				'primary-moderate-violet': '#7541c8',
				'primary-very-dark-grayish-blue': '#48556a',
				'primary-very-dark-blackish-blue': '#19212e',
				'primary-white': '#ffffff',
				'neutral-light-gray': '#cfcfcf',
				'neutral-light-grayish-blue': '#ecf2f8',

			}),
			textColor:{
				'primary-moderate-violet': '#7541c8',
				'primary-very-dark-grayish-blue': '#48556a',
				'primary-very-dark-blackish-blue': '#19212e',
				'primary-white': '#ffffff',
				'neutral-light-gray': '#cfcfcf',
				'neutral-light-grayish-blue': '#ecf2f8',
			},
			borderColor:{
				'primary-moderate-violet': '#7541c8',
				'primary-very-dark-grayish-blue': '#48556a',
				'primary-very-dark-blackish-blue': '#19212e',
				'primary-white': '#ffffff',
				'neutral-light-gray': '#cfcfcf',
				'neutral-light-grayish-blue': '#ecf2f8',
			},
			fontSize: {
				'paragraph': '13px',
			},
			fontFamily:{
				'family-primary': ['Barlow Semi Condensed', 'sans-serif'],
			}
    },
  },
  variants:{
	extend:{
		with:['responsive','hover','focus']
	}
  },
  plugins: [],
};



