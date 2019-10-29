# Payment Health

An implementation of a year long heatmap featuring transactional data and displaying success/fail rates for each day.

## Setup

`npm i`

## Run

`npm run dev`

I have used the https://parceljs.org bundler as it is a 0 config bundler.

## Test

`npm test`

I have used jest, ts-jest and enzyme to test both ts and tsx files, I find snapshots useful for testing render only components.

### Considerations

In order to maintain accessibility the entire year is rendered as li’s with title attributes.

### Improvements

- Add a month component to ensure that users can navigate between months.
- Pull the data into the component using fetch.
- Pull price in to show amount lost/gained in in transactions.
- Include hover or click state to display expanded information.
- Put data into redux so it fan be refreshed into browser cache when available.
- Render this data as html on the server and refresh once per day.