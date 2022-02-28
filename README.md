# protobuf-tutorial-ts
This is a worked example of Protobuf message creation, serialization and de-serialization for Typescript.  This is based on the [Google Protobuf Tutorials](https://developers.google.com/protocol-buffers/docs/tutorials) but there is not one for Typescript and draws primarily from the Python tutorial.

## Protocol Buffer Basics: Typescript

### Defining Your Protocol Format
See: ```src/proto/addressBook.proto```<br>
This is the .proto file containing the Address Book data structure.


### Compiling Your Protocol Buffers
Run ```./compileProtos.sh```<br>
This generates both the .js and .d.ts output in ```./generated```


### The Protocol Buffer API
See: ```src/addressBook.ts```<br>
This has three functions that create the message, serialize and deserialize, into and out of the protocol buffer binary format.


### Tests
See: ```test/addressBook.test.ts```<br>
Run: ```npm test```<br>
This logs to console the created addressBook object, the Uint8Array of the serialized protocol buffer and the de-serialized object.
