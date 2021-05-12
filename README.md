# standard-version-update-openapi3-version
A hook for updating openapi3 spec file using `standard-version` npm package.


# Installation
```sh
npm i --save-dev @map-colonies/standard-version-update-openapi3-version
```

# Setup
Create a file named `.versionrc`
```json
{
  "bumpFiles": [
    {
      "filename": "/path/to/openapi3.yml",
      "updater": "/node_modules/@map-colonies/standard-version-update-openapi3-version/src/index.js"
    }
  ]
}
```
