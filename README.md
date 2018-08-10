# Browser Giving App

Requirements:

- Docker
  - Known issue is installing new deps don't update within image due to cache. Currently must rip out current image and re-create after adding new deps.
- Kitematic
- Node.js >= 9
- CORS Browser Plugin (Temporary While No Proxy is setup for application)

Architecture:

- api
  - adapters
    - common
      - http - http mechanisms to make restful calls to services
      - request - request object creators to help abstract api specific request details/structure
    - \*
  - entities - common objects to transform server data to client data
  - index.js - bootstrap and initialize adapters + services for outside module use
- components
  - common - building blocks of all other components
  - layout - components that are used for common layout structure
  - - - use case specific components/containers
- providers
  - DataProvider.js - Higher Order Component for fetching and sending request data. Ties into api module
  - \* - Data Provider consumers that specify details of requests and detail how to handle the result/completion of the request.
- router
  - routes.js - Where we are initializing our code splitting of routes and the Loading implementation as chunks are fetched.
  - \* - Application use case routes/sub-pages
- stores
  - Store.js - Higher Order Component that wraps unstated Container to perist data and hydrate data on init from local IndexedDB
  - \* - Store consumers that specify store methods for setting/unsetting stored state
- theme
  - colors - common colors
  - fonts - common fonts/sizes/weights/line-heights
  - gradients - common gradient usage
  - layout - paddings/margins
  - shadows - shadow colors/sizes/helpers
- utilities
  - asyncify - use async/await without all the try/catch
