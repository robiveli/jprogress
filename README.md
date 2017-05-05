# jProgress #

Simple slim lightweight(<2KB) JavaScript progress bar, good for visual loading indicator of callbacks, promises and similar stuff.

### Install ###

With npm:
```sh
npm install jprogress
```

With Bower:
```sh
bower install jprogress
```

### Usage ###

Just include required JavaScript:
```sh
<script src="jProgress.js"></script>
```


### Demo ###

Demo available [here](http://www.rvdizajn.com/jprogress/).


### Options ###

- **brandColor** *(default:#de6c4f)* - background color of progress bar
- **progressHeight** *(default:3)* - progress bar height
- **zIndex** *(default:9999)* - z-index value of progress bar
- **parent** *(default:body)* - parent container


**Example**
```sh
<script>
    jProgress.configure({

        progressHeight: '5',
        zIndex: '2'
        
    }).start(); 

    window.onload = function() {

        jProgress.stop(); 

    };
</script>
```


### API ###

`start()` - start progress 
`stop()` - stop progress 
`configure()` - set options


### License  ###

jScrolly is licensed under the [MIT license](http://opensource.org/licenses/MIT).
