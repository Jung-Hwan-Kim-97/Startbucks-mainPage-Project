 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'cboDQtB-jNQ',
     playerVars: {
     autoplay: true,
     loop: true,
     playlist: 'cboDQtB-jNQ'
     },
     events: {
       onReady: function (event) {
         event.target.mute()
       }
     }
   });
 }


