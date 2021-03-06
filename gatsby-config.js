require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: "gatsby-source-gathercontent",
            options: {
                email: process.env.GATSBY_GC_EMAIL,
                apiKey: process.env.GATSBY_GC_API_KEY,
                projectId: process.env.GATSBY_GC_PROJECT_ID,
            },
        }
    ]
}