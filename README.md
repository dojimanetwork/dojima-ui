# dojima-ui

Doijma UI is a React UI library which contains user interface components utilised by dojima organisation.

Peer dependecies involved:

1.  react - ^17.0
2.  react-dom - ^17.0
3.  @mui/material - ^5.0
4.  @mui/lab
5.  @mui/styles
6.  formik - forms
7.  lodash

Currently it is under heavy development.

Below are the react components developed and published.

1. Button
2. Theme
3. Types
4. Textfield
   a. string
   b. number
5. Checkbox
   a. Single checkbox
   b. Checkbox group.
6. Select
   a. Single select
   b. Multiple select
7. Radio
   a. Single radio button select
   b. Multipe radio button select
8. Date picker
9. Alert
10. Snackbar
    a. Success
    b. Error
    c. Info
    d. Warning
11. context providers
    a. Online status connectivity provider
    b. Snackbar provider
12. react hooks
    a. Debounce - Technique to delay event by amount.
    b. toggle - toggling state
    c. document title - to change document title in any react component.
    d. force update - to forcefully update the ui.
    e. window size - to know the window width, height on change.
    f. animate height - to make particular html element to height zero or full height on user action.

Storybook is integrated to test the individual components developed by dojima.
Run -
yarn run storybook : Starts story book webpage to test the components.
