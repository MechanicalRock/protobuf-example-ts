import { deserializeProtoToMsg, newAddressBookMsg, serializeMsgToProto } from '../src/addressBook'

describe('serialize and deserialize protobuf message', () => {
  const expectedAddressBookMsg = {
    peopleList: [
      {
        name: 'Mr J Blogs',
        id: 1234,
        phonesList: []
      }
    ]
  }

  it('should generate the expected AddressBook Message', () => {
    const addressBook = newAddressBookMsg()
    console.log(JSON.stringify(addressBook.toObject(), null, 2))

    expect(addressBook.toObject()).toEqual(expectedAddressBookMsg)
  })

  it('should serialize to a protobuf and then deserialize to the same AddressBook message', () => {
    const addressBook = newAddressBookMsg()
    expect(addressBook.toObject()).toEqual(expectedAddressBookMsg)

    const proto = serializeMsgToProto(addressBook)
    console.log(proto)

    const deserializedProto = deserializeProtoToMsg(proto)
    console.log(JSON.stringify(deserializedProto.toObject(), null, 2))

    expect(deserializedProto.toObject()).toEqual(expectedAddressBookMsg)
  })
})
