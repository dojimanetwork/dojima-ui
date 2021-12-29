# dojima-ui

**Doijma UI** is a React UI library which contains user interface components utilised by **dojima organisation**.

## Peer dependecies involved:

1.  react - ^17.0
2.  react-dom - ^17.0
3.  @mui/material - ^5.0
4.  @mui/lab
5.  @mui/styles
6.  formik - forms
7.  lodash

***

Currently it is under heavy development.

Below are the react components developed and published.

1. Button
   * Dojima default button.
   * Neumorphism styled button.
   * Flat button.
2. Theme
3. Types
4. Textfield
   - string
   - number
5. Checkbox
   - Single checkbox
   - Checkbox group.
6. Select
   - Single select
   - Multiple select
7. Radio
   - Single radio button select
   - Multipe radio button select
8. Date picker
9. Alert
10. Snackbar
    - Success
    - Error
    - Info
    - Warning
11. context providers
    - Online status connectivity provider
    - Snackbar provider
12. react hooks
    - Debounce - Technique to delay event by amount.
    - toggle - toggling state
    - document title - to change document title in any react component.
    - force update - to forcefully update the ui.
    - window size - to know the window width, height on change.
    - animate height - to make particular html element to height zero or full height on user action.

Storybook is integrated to test the individual components developed by dojima.
Run -
yarn run storybook : Starts story book webpage to test the components.
