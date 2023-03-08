# OD Demo App
This is a Demo app build over react native

### App File Structure

    
    .
    ├── ...
    ├── App.js                  #root file
    ├── src                     # source root folder
    │   ├── components          # Consist of components imported to screens
    │   ├── navigation          # navigation file
    │   ├── screens             # screen folder container / views
    │   ├── themes              # theme files such as constant, font size, colors, common 
    │   └── ...                 # etc.
    └── ...


<p float="left">
<img src="/images/screen-1.png" width="200"/>
<img src="/images/screen-2.png" width="200"/> 
<img src="/images/screen-3.png" width="200"/> 
<img src="/images/screen-4.png" width="200"/> 
</p>

<p>App is created using iOS only for now</p>


- App consist of 3 screens with tabs
- I use ![react-native-gifted-charts](https://www.npmjs.com/package/react-native-gifted-charts) for the line & piechart
- The app is an ejected app & not just an expo app for performance improvement instead