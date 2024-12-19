# HTTP(HyperText Transfer Protocol) Vs  WebSocket
HTTP & WebSocket are both communication protocols used in client-server communication. 
but they serve different purposes and have distinct characteristics.


| Aspects   | HTTP  |  WebSocket   |
|------------|------------|------------|
| Type | Half-Duplex(Request-Respond) | Full-Duplex(Simultaneous bidirectional) |
| Initiator | Client must always initiate communication | Either client or server can initiate messages |
| Connection Persistence | Stateless(Each request opnes and closes a connection) | Persistent(connection always stays open after handshake) |
| Header Size | http headers can include cookies, authentication tokens, and other metadata, increasing size | Websocket headers are lightweight, reducing communication overhead |
| Protocol Layer | Application Layer | Lower-level protocol over TCP(bi-directional) |
| Data Format | plain text/ JSON / HTML | binary formats |
| Latency | higer latency due to connection setup overhead | low latency due to persistent connection |
| Security | HTTPS(SSL/TLS) | WSS(WebSocket Secure) |
| Use Cases | static resource loading(HTML, CSS, images) | Real-time apps(chat, gaming,stock updates) |
