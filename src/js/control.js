import $ from 'jquery'
import WebSocketHeartbeatJs from 'websocket-heartbeat-js'

$(()=>{

  // Template use for websocket-heartbeat-js
  const wssIp = '192.168.24.15'
  const port = 8521
  const ws = new WebSocketHeartbeatJs({
    url: "ws://" + wssIp + ":" + port
  })
  ws.onopen = () => {}
  ws.onclose = () => {}
  ws.onmessage = () => {}

  // Template use for jquery
  $('#app').append(`<h1>A base-template for npm, webpack and jquery</h1>`)

})