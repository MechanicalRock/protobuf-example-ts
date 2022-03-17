import { newAddressBookMsg, serializeMsgToProto, deserializeProtoToMsg } from '../src/addressBook'

describe('serialize and deserialize protobuf message', () => {
  const expectedAddressBookMsg = {
    people: [
      {
        name: 'Joe Blogs',
        phones: [
          {
            phoneNumber: '0123456789',
            phoneType: 0
          }
        ]
      },
      {
        name: 'Jane Smith',
        phones: [
          {
            phoneNumber: '0987654321',
            phoneType: 1
          }
        ]
      }
    ]
  }

  it('should generate the expected AddressBook Message', () => {
    const addressBook = newAddressBookMsg()
    console.log(JSON.stringify(addressBook, null, 2))

    expect(addressBook).toEqual(expectedAddressBookMsg)
  })

  it('should serialize to a protobuf and then deserialize to the same AddressBook message', () => {
    const addressBook = newAddressBookMsg()
    expect(addressBook).toEqual(expectedAddressBookMsg)

    const proto = serializeMsgToProto(addressBook)
    console.log(proto)

    const deserializedProto = deserializeProtoToMsg(proto)
    console.log(JSON.stringify(deserializedProto, null, 2))

    expect(deserializedProto).toEqual(expectedAddressBookMsg)
  })
})
