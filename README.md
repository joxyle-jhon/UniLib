#UniLIB

# Book Dashboard Setup Guide

This guide provides instructions for setting up a book management dashboard using React, React Query (tQuery), Supabase for data management, and AG Grid for displaying book data.

## Requirements

Before starting, ensure you have the following tools installed:
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React](https://reactjs.org/)
- [React Query](https://tanstack.com/query/v3)
- [Supabase](https://supabase.com/)
- [AG Grid](https://www.ag-grid.com/)
- [Lucid React Icons](https://github.com/luin/react-icons)

## Steps to Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```
2. Install Dependencies
Navigate to the project directory and install required dependencies using either npm or yarn.

Using npm:
```bash
npm install
```

3. Install Additional Packages
You will need to install the following libraries:

React Query for managing and caching API requests.
Supabase for interacting with your database.
AG Grid for displaying data in a grid format.
Lucid React Icons for the edit and delete icons.

Install React Query and Supabase:
```bash
npm install @tanstack/react-query @supabase/supabase-js
```
Install AG Grid and Lucid React Icons:
```bash
npm install ag-grid-react ag-grid-community react-icons
```
Final Configuration and Running the Application
```bash
npm run dev
```


