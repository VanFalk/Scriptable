// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: skull;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic-wand;
let html = `
<style>
body {
  margin: 0;
  padding 0;
  background: black;
}
.vid {
  width: 100%;
  height: 100%;
}
</style>
<div id="player"></div>
<script>
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: '-eks8LG72uo',
    events: {
    'onReady': onPlayerReady
  }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.seekTo(3, true);
}
</script>
`
WebView.loadHTML(html, null, new Size(0, 202))