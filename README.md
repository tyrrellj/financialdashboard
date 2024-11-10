# Financial Dashboard

A basic financial dashboard that connects to Paradigm Capital's API and displays client/trade data

The project was timeboxed for ~3 hours so I focused on the core functionality over fancier features

# Deployment Notes
Project is deployed through nuxthub and connected directly to the repo for live updates. If this was being used by a company we would likely adjust it to build off of another branch to control when updates are released while maintaining code history.
link to deployment: https://financialdashboard.nuxt.dev/

# Setup Notes
had to add an "unenv" dependency to run it on cloudflare ("<package_manager> install -D unenv")

nuxthub was very easy to manage deployments with, it worked very similarly to other products I've worked with.
Nuxthub had clear logging for the issue encountered during build
The site is accessible on desktop browsers and mobile (formatting would need to be adjusted for smaller screens but I think thats outside the scope of this)
