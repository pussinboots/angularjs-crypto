angularjs http interception extension for cryptography
==================

travis https://travis-ci.org/pussinboots/angularjs-crypto

The project offer a http interceptor which decryp and encrypt marked json field.

Start the project local

play run

Then go to http://localhost:9000/assets/products-e2e.html

Or run the karma test with
npm test

Required installed nodejs, npm and karma of course see here
http://karma-runner.github.io/0.12/intro/installation.html

cryptography supported now
- aes

follow 
- des
- triple aes, des
- will see

This angularjs module is part of the bankapp https://github.com/pussinboots/bankapp.
The idea is to store encrypted data in a backend and decode it on the client side so that the backend 
doesn't know what kind of data it stores only the angularjs client and the storage process know the 
plain data.

If you have question or want to take of the development than write me a mail at pussinboots666@googlemail.com.

It is a very young project but with the support of wide open source tools like karma and travis it
will flow soon i hope.

