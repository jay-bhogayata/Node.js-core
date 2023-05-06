- **[what is osi model ?](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)**

- **[what is tcp/ip model ?](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/)**

- tcp and udp both are layer 4 ( transport layer ) protocol .

## TCP:

- tcp stands for transmission control protocol.

- pros :
  - acknowledgement.
  - guaranteed delivery.
  - connection oriented.
  - congestion control.
  - packet reordering.
  - reliable.
  - stateful.
  - error checking.  

- cons :
  - slower than udp.
  - overhead because of connection oriented.
  - consume more bandwidth.
  - large packet size.
  - take server resources to maintain connection state like memory.

  [tcp server example](tcp.js) 


## UDP:

- udp stands for user datagram protocol.
- it is like a fire and forget .

- pros :
  - smaller packet size.
  - consume less bandwidth.
  - connectionless.
  - faster than tcp.

- cons :
  - no acknowledgement.
  - no guaranteed delivery.
  - no congestion control.
  - no packet reordering.
  - unreliable.
  - stateless.
  - no error checking.
  
  [udp server example](udp.js) 