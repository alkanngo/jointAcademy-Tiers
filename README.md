# Getting Started
## Initial State

The current app is very simple and serves the purpose of listing users that belong to the US market (US provider). This was the only provider until now, but currently we have 3 new providers and we need to integrate them as well. 

The user pool is very long (1000+ users / market) and it will be relevant to always take it into consideration, for the exercise we will provide a smaller subset of users.

## Good to have in mind

   ***Providers / Markets***

- New markets have small data diferences but they have the same information.
- Some providers may have slower response times.
- We should not rely 100% that records are unique.
- Connections may timeout.

   ***Tiers***

- Tier 1 (GOLD): Users registered for 10 or more years
- Tier 2 (SILVER): Users registered between 5 and 10 years
- Tier 3 (BRONZE): Users registered within less that 5 years

​    ***Users***

- Same user may exist in different providers (markets)
- The current user (logged in) id will be available through the methods `getUserId` and/or `getUser` from the `auth` service.

## Challenge 1

- We will need to present the user list with the **name**, **market** and **Tier** columns.
- The test user (the one using the app) is among the list of users it should be visually possible to identify it on any list or view.
- Detail view needs to show the user details and tier information
- Detail view must be available directly with the user uuid

## Challenge 2

- Create a visually attractive way of showing the lists and user details

## Challenge 3

- Need to include/add nordic markets users to the list using the exposed and available methods `getFiUsers` , `getDkUsers` and  `getNoUsers` in the API library
- The list view must show the data fetch progress, so that the user knows if all markets are present, if and what markets failed or an error message if connectivity fails
- There should exist a button to update the data
- The list view should display all the users from all markets
- If a user belong to multiple markets it should be visible
- It should be possible to filter the users by market

# Techical information
## Available Scripts

In the project directory, you can run:

### `yarn install`

This will install all the required modules to the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
